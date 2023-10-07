import { PlaceOptionList } from "./PlaceOptionList";
import { forwardRef } from "react";

type Props = {
  place: string;
  onChangePlace: (place: string) => void;
};

export const SelectPlace = forwardRef<HTMLSelectElement, Props>(
  ({ place, onChangePlace }, ref) => {
    return (
      <section>
        <form>
          <div className="flex justify-between items-center mb-3">
            <h2>
              <label className="text-xl">記録場所</label>
            </h2>
            <span className="text-sm border-primary border-2 rounded-sm px-4 text-center">
              {place === "" ? "未選択" : place}
            </span>
          </div>
          <div className="mb-3">
            <PlaceOptionList ref={ref} onChange={onChangePlace} />
          </div>
        </form>
      </section>
    );
  }
);
