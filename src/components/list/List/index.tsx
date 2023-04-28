import { type FC } from "react";
import { Item, type ColorVariantKeys, RoundedVariantKeys } from "../Item";

type Props = {
  data: { id: string; text: string }[];
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
};

const List: FC<Props> = ({ data, onDelete, onUpdate }) => {
  const getRounded = (i: number): RoundedVariantKeys => {
    const length = data.length;
    switch (i) {
      case 0:
        return "top";
      case length - 1:
        return "bottom";
      default:
        return "none";
    }
  };

  const getColor = (i: number): ColorVariantKeys => {
    if (i % 2 === 0) return "light-gray";
    return "gray";
  };

  return (
    <ul>
      {data.map(({ id, text }, i) => (
        <Item
          key={id}
          text={text}
          rounded={getRounded(i)}
          color={getColor(i)}
          onDelete={onDelete ? () => onDelete(id) : undefined}
          onUpdate={onUpdate ? () => onUpdate(id) : undefined}
        />
      ))}
    </ul>
  );
};

export { List };
