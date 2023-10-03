"use client";
import useSWR from "swr";
import { getCurrentId } from "@/db";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
  place: string;
};

const PublishModal: React.FC<Props> = ({ onClose, place }) => {
  const { data: currentId } = useSWR("/currentid", getCurrentId);
  return (
    <Sheet onClose={onClose} color="reverse">
      <section className="p-3">
        <div className="text-3xl flex gap-5 mb-5">
          <p>発行したID</p>
          <p>{currentId ? currentId : <>Loading...</>}</p>
        </div>
        <div className="text-3xl flex gap-5">
          <p>記録場所</p>
          <p>{place}</p>
        </div>
      </section>
    </Sheet>
  );
};

export { PublishModal };
