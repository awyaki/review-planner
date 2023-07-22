"use client";
import { SmallButton } from "@/components";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useLogoutButton = (): (() => React.ReactNode) => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error();
    }
    router.push("/login");
  }, [router]);

  const render = () => (
    <SmallButton text="サインアウト" onClick={handleLogout} />
  );

  return render;
};
