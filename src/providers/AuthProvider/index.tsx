"use client";
import { createContext, useState } from "react";
import { parseIntoSessionUser, FailedToParseIntoSessionUser } from "@/types";

import Script from "next/script";

export const AuthContext = createContext<{
  user: { id: string; name: string } | null;
}>({ user: null });

const getUser = async () => {
  const res = await fetch("http://localhost:3000/api/user");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const _user = await res.json();
  const user = parseIntoSessionUser(_user);
  if (user instanceof FailedToParseIntoSessionUser) throw new Error();
  return user;
};

export const AuthProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // fetch user data from database with sesssion id and google id
  // After fetching data, if user is null, redirect login page
  // and make user create a new account
  const user = await getUser();
  console.log(user);
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
