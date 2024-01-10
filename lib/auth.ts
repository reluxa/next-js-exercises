import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              if (credentials?.username === credentials?.password) {
                return { id: "1", name: credentials?.username, email: credentials?.username }
              } else {
                return null;
              }
            }
          })
    ],
    callbacks: {
      session: ({ session, token }) => {
//        console.log("Session Callback", { session, token });
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            randomKey: token.randomKey,
          },
        };
      },
      jwt: ({ token, user }) => {
//        console.log("JWT Callback", { token, user });
        if (user) {
          const u = user as unknown as any;
          return {
            ...token,
            id: u.id,
            randomKey: u.randomKey,
          };
        }
        return token;
      },
    },
  };