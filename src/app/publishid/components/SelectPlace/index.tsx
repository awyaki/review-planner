import { PlaceOptionList } from "./PlaceOptionList";
import { forwardRef } from "react";

type Props = {
  onChangePlace: (place: string) => void;
};

export const SelectPlace = forwardRef<HTMLSelectElement, Props>(
  ({ onChangePlace }, ref) => {
    return (
      <section>
        <form>
          <div className="flex justify-between mb-3">
            <h2>
              <label className="text-xl">記録場所</label>
            </h2>
          </div>
          <div className="mb-3">
            <PlaceOptionList ref={ref} onChange={onChangePlace} />
          </div>
        </form>
      </section>
    );
  }
);
