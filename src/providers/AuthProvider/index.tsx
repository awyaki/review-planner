"use client";
import { createContext, useState } from "react";
import { User } from "@/types";

import Script from "next/script";

export const AuthContext = createContext<{
  user: User | null;
}>({ user: null });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // fetch user data from database with sesssion id and google id
  // After fetching data, if user is null, redirect login page
  // and make user create a new account

  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_ID}
        data-context="signin"
        data-login_uri="http://localhost:3000/api/login"
        data-auto_select="true"
        data-itp_support="true"
      ></div>
      {children}
    </AuthContext.Provider>
  );
};