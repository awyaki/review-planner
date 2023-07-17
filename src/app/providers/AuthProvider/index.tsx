"use client";
import { createContext } from "react";
import { useSessionUser } from "./hooks";
import { redirect, usePathname } from "next/navigation";

export const AuthContext = createContext<{
  user: { id: string; name: string } | null;
}>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useSessionUser();
  const path = usePathname();
  if (path === "/login") return <>{children}</>;

  if (isLoading)
    // TODO: replace with Loading component
    return <>loading...</>;
  if (!data) {
    redirect("http://localhost:3000/login");
  }
  return (
    <AuthContext.Provider value={{ user: data ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};
