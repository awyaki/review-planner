import { MenuSkeleton } from "./MenuSkeleton";
import { SettingSkeleton } from "./SettingSkeleton";
import { IdInfoSkeleton } from "./IdInfoSkeleton";
import { IdListSkeleton } from "./IdListSkeleton";
import { NotificationCreateSkeleton } from "./NotificationCreateSkeleton";
import { NotificationPresetsSkeleton } from "./NotificationPresetsSkeleton";

type Props = {
  path: string;
};

export const Skeleton: React.FC<Props> = ({ path }) => {
  // ex. when path is /idinfo/125, path.split("/") will become ["", "idinfo", "125"]
  const splitted = path.split("/");

  switch (splitted[1]) {
    case "menu": {
      return <MenuSkeleton />;
    }
    case "settings": {
      return <SettingSkeleton />;
    }
    case "idinfo": {
      return <IdInfoSkeleton />;
    }
    case "notifications": {
      if (splitted[2] === "create") return <NotificationCreateSkeleton />;
      if (splitted[2] === "presets") return <NotificationPresetsSkeleton />;
      return <>Loading...</>;
    }
    case "idlist": {
      return <IdListSkeleton />;
    }

    default: {
      return <>Loading...</>;
    }
  }
};
