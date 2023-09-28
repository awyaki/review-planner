type Props = {
  onPublishId: () => Promise<void> | void;
};
export const PublishId: React.FC<Props> = ({ onPublishId }) => {
  return (
    <button
      type="button"
      className="w-1/4 px-2 py-1 rounded-lg bg-primary text-text-on-primary"
      onClick={onPublishId}
    >
      IDを発行
    </button>
  );
};
