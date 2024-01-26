import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { dbConnection } from "./lib/utils";

const login = async (credentials) => {
  try {
    dbConnection();
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
          return null;
        }
      },
    }),
  ],
});
