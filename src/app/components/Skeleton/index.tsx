import { MenuSkeleton } from "./MenuSkeleton";

type Props = {
  path: string;
};

export const Skeleton: React.FC<Props> = ({ path }) => {
  switch (path) {
    case "/menu": {
      return <MenuSkeleton />;
    }
    default: {
      return <>Loading...</>;
    }
  }
};
