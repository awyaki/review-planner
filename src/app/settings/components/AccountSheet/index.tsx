import { SmallButton, LargeButton } from "@/components";

type Props = {
  onClose: () => void;
};

const AccountSheet: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="absolute top-0 left-0 w-screen h-screen cursor-pointer bg-gray bg-opacity-20"
      ></div>
      <section className="absolute bottom-0 left-0 w-screen bg-white text-dark-gray rounded-t-2xl">
        <div className="px-3 pt-5 mb-10">
          <h2 className="mb-5 text-lg">Account</h2>
          <div className="flex mb-5 gap-5">
            <svg width={36} height={36}>
              <circle cx={18} cy={18} r={18}></circle>
            </svg>
            <div>Example name</div>
          </div>
          <div className="mb-8">
            <SmallButton text="サインアウト" onClick={() => {}} />
          </div>
          <div>
            <SmallButton text="アカウント削除" onClick={() => {}} />
          </div>
        </div>
        <LargeButton text="閉じる" onClick={onClose} />
      </section>
    </>
  );
};

export { AccountSheet };
