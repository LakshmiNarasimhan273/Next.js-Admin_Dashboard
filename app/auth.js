import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "@/authconfig";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { dbConnection } from "./lib/utils";

const login = async (credentials) => {
  try {
    await dbConnection();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("username mismatch!!!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Password mismatch!!!");
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return { error: "Authentication error" };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
