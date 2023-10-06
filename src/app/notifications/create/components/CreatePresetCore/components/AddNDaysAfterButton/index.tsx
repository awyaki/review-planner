import { useAddOneNotificationSheetForPreset } from "../../../../../hooks/useAddOneNotificationSheetForPreset";
import { SmallButton } from "@/components";

type Props = {
  onAddNDaysAfter: (day: number) => void;
};

export const AddNDaysAfterButton: React.FC<Props> = ({ onAddNDaysAfter }) => {
  const [render, handleOpen] =
    useAddOneNotificationSheetForPreset(onAddNDaysAfter);
  return (
    <>
      {render()}
      <SmallButton onClick={handleOpen} text="通知を追加" />
    </>
  );
};
