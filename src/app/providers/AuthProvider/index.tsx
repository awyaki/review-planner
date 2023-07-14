"use client";
import { createContext } from "react";
import { useSessionUser } from "./hooks";
import Script from "next/script";

export const AuthContext = createContext<{
  user: { id: string; name: string } | null;
}>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // fetch user data from database with sesssion id and google id
  // After fetching data, if user is null, redirect login page
  // and make user create a new account
  const { data } = useSessionUser();
  console.log("authProvider", data);
  return (
    <AuthContext.Provider value={{ user: data ?? null }}>
      {!data ? (
        <>
          <Script
            src="https://accounts.google.com/gsi/client"
            async
            defer
          ></Script>
          <div
            id="g_id_onload"
            data-client_id={process.env.NEXT_PUBLIC_GOOGLE_ID}
            data-context="signin"
            data-login_uri="http://localhost:3000/api/login"
            data-auto_select="true"
            data-itp_support="true"
          ></div>
          <p>ログインしてください</p>
        </>
      ) : (
        <>{children}</>
      )}
    </AuthContext.Provider>
  );
};
