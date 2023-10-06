import { useRouter } from "next/navigation";
export const CancelCreateButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
      onClick={() => router.push("/notifications/presets")}
      type="button"
    >
      キャンセル
    </button>
  );
};
