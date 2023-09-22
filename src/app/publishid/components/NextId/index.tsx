"use client";

type Props = {
  nextId: number;
};

export const NextId: React.FC<Props> = ({ nextId }) => {
  return <span className="block text-4xl">{nextId}</span>;
};
