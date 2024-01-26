export const authconfig = {
  providers: [],
  pages: {
    signIn: "/auth",
  },
  callbacke: {
    authorized({ auth, request }) {
      const isLogged = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLogged) {
          return true;
        }
        return false;
      } else if (isLogged) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
