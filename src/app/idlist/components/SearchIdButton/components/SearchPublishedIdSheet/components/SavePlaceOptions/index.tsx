type Props = {
  places: Readonly<string[]>;
};

export const SavePlaceOptions: React.FC<Props> = ({ places }) => {
  const s = new Set(places);
  const placesWithoutDuplication = Array.from(s);
  return (
    <>
      {placesWithoutDuplication.map((place) => (
        <option key={place} value={place}>
          {place}
        </option>
      ))}
    </>
  );
};
