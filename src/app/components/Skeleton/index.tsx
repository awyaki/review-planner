import { MenuSkeleton } from "./MenuSkeleton";
import { SettingSkeleton } from "./SettingSkeleton";

type Props = {
  path: string;
};

export const Skeleton: React.FC<Props> = ({ path }) => {
  switch (path) {
    case "/menu": {
      return <MenuSkeleton />;
    }
    case "/settings": {
      return <SettingSkeleton />;
    }
    default: {
      return <>Loading...</>;
    }
  }
};
