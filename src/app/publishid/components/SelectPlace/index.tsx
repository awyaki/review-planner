import { PlaceOptionList } from "./PlaceOptionList";

type Props = {
  onChangePlace: (place: string) => void;
};

export const SelectPlace: React.FC<Props> = ({ onChangePlace }) => {
  return (
    <section>
      <form>
        <div className="flex justify-between mb-3">
          <h2>
            <label className="text-xl">記録場所の登録</label>
          </h2>
        </div>
        <div className="mb-3">
          <PlaceOptionList onChange={onChangePlace} />
        </div>
      </form>
    </section>
  );
};
