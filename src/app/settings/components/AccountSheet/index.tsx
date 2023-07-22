"use client";
import { SmallButton } from "@/components";
import { Sheet } from "@/components";
import { useContext } from "react";
import { AuthContext } from "@/app/providers";
import Image from "next/image";
import { useLogoutButton } from "./hooks";

type Props = {
  onClose: () => void;
};

const AccountSheet: React.FC<Props> = ({ onClose }) => {
  const user = useContext(AuthContext);
  const renderLogoutButton = useLogoutButton();
  if (!user) return <></>;
  return (
    <Sheet onClose={onClose}>
      <div className="px-5 pb-5">
        <h2 className="mb-5 text-lg">アカウント</h2>
        <div className="flex items-center mb-5 gap-5">
          <Image
            className="rounded-full"
            src={user.picture}
            alt="picture of your accout"
            width={32}
            height={32}
          />
          <div>{user.name}</div>
        </div>
        <div className="mb-8">{renderLogoutButton()}</div>
        <div>
          <SmallButton text="アカウント削除" onClick={() => {}} />
        </div>
      </div>
    </Sheet>
  );
};

export { AccountSheet };
