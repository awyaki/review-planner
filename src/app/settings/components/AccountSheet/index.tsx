"use client";
import { SmallButton } from "@/components";
import { Sheet } from "@/components";
import { useContext } from "react";
import { AuthContext } from "@/app/providers";

type Props = {
  onClose: () => void;
};

const AccountSheet: React.FC<Props> = ({ onClose }) => {
  const user = useContext(AuthContext);

  if (!user) return <></>;
  return (
    <Sheet onClose={onClose}>
      <div className="px-5 pb-5">
        <h2 className="mb-5 text-lg">アカウント</h2>
        <div className="flex mb-5 gap-5">
          <svg width={36} height={36}>
            <circle cx={18} cy={18} r={18}></circle>
          </svg>
          <div>{user.name}</div>
        </div>
        <div className="mb-8">
          <SmallButton text="サインアウト" onClick={() => {}} />
        </div>
        <div>
          <SmallButton text="アカウント削除" onClick={() => {}} />
        </div>
      </div>
    </Sheet>
  );
};

export { AccountSheet };
