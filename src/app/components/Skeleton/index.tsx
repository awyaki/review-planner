import { MenuSkeleton } from "./MenuSkeleton";
import { SettingSkeleton } from "./SettingSkeleton";
import { IdInfoSkeleton } from "./IdInfoSkeleton";

type Props = {
  path: string;
};

export const Skeleton: React.FC<Props> = ({ path }) => {
  // ex. when path is /idinfo/125, path.split("/") will ["", "idinfo", "125"]
  const splitted = path.split("/")[1];

  switch (splitted) {
    case "menu": {
      return <MenuSkeleton />;
    }
    case "settings": {
      return <SettingSkeleton />;
    }
    case "idinfo": {
      return <IdInfoSkeleton />;
    }
    default: {
      return <>Loading...</>;
    }
  }
};
