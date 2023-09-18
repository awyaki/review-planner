type Props = {
  belongTo: number;
  done: boolean;
};

const styleVariant = (done: boolean) =>
  done
    ? "flex rounded-sm border-2 w-11 h-11 justify-center items-center border-primary text-text-on-primary bg-primary"
    : "flex rounded-sm border-2 w-11 h-11 justify-center items-center border-primary";

export const IdItem: React.FC<Props> = ({ belongTo, done }) => {
  return (
    <li className={styleVariant(done)}>
      <button className="w-full h-full align-middle">{belongTo}</button>
    </li>
  );
};
