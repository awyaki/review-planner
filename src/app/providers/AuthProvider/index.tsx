"use client";
import { createContext } from "react";
import { useSessionUser } from "./hooks";
import { GoogleOneTap } from "@/app/components";

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
          <GoogleOneTap />
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
