"use client";
import { createContext } from "react";
import { useSessionUser } from "./hooks";
import { redirect, usePathname } from "next/navigation";
import { Skeleton } from "@/app/components";

export const AuthContext = createContext<{
  user: { id: string; name: string } | null;
}>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useSessionUser();
  const path = usePathname();
  if (path === "/login") return <>{children}</>;

  if (isLoading) return <Skeleton path={path} />;
  if (!data) {
    redirect("http://localhost:3000/login");
  }
  return (
    <AuthContext.Provider value={{ user: data ?? null }}>
      {children}
    </AuthContext.Provider>
  );
};
