"use cient";
import { useState } from "react";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
  onSubmit: () => void | Promise<void>;
};

export const AddPlaceSheet: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [newPlaceName, setNewPlaceName] = useState("");
  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="px-5 pb-5">
        <form onSubmit={onSubmit}>
          <label htmlFor="new_place" className="block text-xl mb-3">
            新しい記録場所
          </label>
          <input
            id="new_place"
            className="mb-10 w-1/4 mr-3 bg-light-gray text-dark-gray"
            maxLength={30}
            required
            value={newPlaceName}
            onChange={(e) => setNewPlaceName(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
              onClick={onClose}
              type="button"
            >
              キャンセル
            </button>
            <button className="w-1/3 px-2 py-2 rounded-lg bg-bg-primary text-primary">
              追加
            </button>
          </div>
        </form>
      </div>
    </Sheet>
  );
};
