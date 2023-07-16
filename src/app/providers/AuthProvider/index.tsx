"use client";
import { createContext } from "react";
import { useSessionUser } from "./hooks";
import Script from "next/script";

export const AuthContext = createContext<{
  user: { id: string; name: string } | null;
}>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useSessionUser();
  // TODO: replace with Loading component
  if (isLoading) return <>loading...</>;
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
          <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
            <div
              className="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left"
            ></div>
          </article>
        </>
      ) : (
        <>{children}</>
      )}
    </AuthContext.Provider>
  );
};
