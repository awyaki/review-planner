"use client";
import { SmallButton } from "@/components";
import { useAddPlaceSheet } from "./hooks";
export const AddPlaceButton: React.FC = () => {
  const [render, handleOpen] = useAddPlaceSheet();
  return (
    <>
      {render()}
      <SmallButton text="記録場所を追加" onClick={handleOpen} />
    </>
  );
};
