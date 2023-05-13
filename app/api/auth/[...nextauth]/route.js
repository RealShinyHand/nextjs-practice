import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextResponse } from "next/server";

//https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/
//it is difficult to me cuz reference doc is not proper next js 13
//but upon url is impormating about this problem 
//https://next-auth.js.org/configuration/initialization#route-handlers-app
//this url talk that it will be updated
//코딩애플 강의 버전과는 다르게 최신버전으로 하니깐 되기는 된다.
export const authOptions = {
  providers: [
    GithubProvider({
      clientId:  process.env.GIT_OAUTH_CLIENT_ID,
      clientSecret: process.env.GIT_OAUTH_SECRET,
    }),
  ],
  secret : process.env.JWT_KEY,
};
const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}


