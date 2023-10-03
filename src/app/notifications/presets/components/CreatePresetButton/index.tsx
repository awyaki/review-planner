"use client";
import { useRouter } from "next/navigation";
import { SmallButton } from "@/components";
export const CreatePresetButton: React.FC = () => {
  const router = useRouter();
  return (
    <SmallButton
      onClick={() => router.push("/notifications/create")}
      text="新規プリセットを作成"
    />
  );
};
