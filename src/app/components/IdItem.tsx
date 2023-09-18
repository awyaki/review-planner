type Props = {
  belongTo: number;
  done: boolean;
  onClick: () => void;
};

const styleVariant = (done: boolean) =>
  done
    ? "flex rounded-sm border-2 w-11 h-11 justify-center items-center border-primary text-text-on-primary bg-primary"
    : "flex rounded-sm border-2 w-11 h-11 justify-center items-center border-primary";

export const IdItem: React.FC<Props> = ({ belongTo, done, onClick }) => {
  return (
    <li className={styleVariant(done)}>
      <button onClick={onClick} className="w-full h-full align-middle">
        {belongTo}
      </button>
    </li>
  );
};
