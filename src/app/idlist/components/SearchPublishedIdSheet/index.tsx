"use client";
import { useState } from "react";
import { Sheet } from "@/components";
import { IdItem } from "../IdItem";

type Props = {
  onClose: () => void;
};

export const SearchPublishedIdSheet: React.FC<Props> = ({ onClose }) => {
  const [completeCondition, setCompleteCondition] = useState(false);
  const [query, setQuery] = useState("");
  const [minIdQuery, setMinIdQuery] = useState("");
  const [maxIdQuery, setMaxIdQuery] = useState("");
  const result = [123, 124, 125];

  return (
    <Sheet color="reverse" onClose={onClose}>
      <div className="px-5">
        <section className="mb-8">
          <h2 className="mb-3 text-lg">検索条件</h2>
          <div className="flex items-center justify-between w-full px-5 py-2 mb-2 border rounded-md text-text-on-primary border-text-on-primary">
            <label htmlFor="seachById">IDで検索</label>
            <input
              className="w-20 px-2 text-right rounded-sm searchById outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between w-full px-5 py-2 mb-2 border rounded-md text-text-on-primary border-text-on-primary">
            <span>範囲で検索</span>
            <div>
              <label htmlFor="min" className="mr-2 text-sm">
                最小
              </label>
              <input
                className="w-20 px-2 mr-5 text-right rounded-sm searchByRange outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
                inputMode="numeric"
                value={minIdQuery}
                onChange={(e) => setMinIdQuery(e.target.value)}
              />
              <label htmlFor="max" className="mr-2 text-sm">
                最大
              </label>
              <input
                className="w-20 px-2 text-right rounded-sm searchByRange outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
                inputMode="numeric"
                value={maxIdQuery}
                onChange={(e) => setMaxIdQuery(e.target.value)}
              />
            </div>
          </div>
          <SelectButton
            text="完了済み"
            onClick={() => setCompleteCondition((cond) => !cond)}
            on={completeCondition}
          />
        </section>
        <section className="pb-5">
          <h2 className="mb-3 text-lg">検索結果</h2>
          <ul>
            {result.map((id, i) => {
              const color: Parameters<typeof IdItem>["0"]["color"] =
                i % 2 === 0 ? "light-gray" : "gray";
              const rounded: Parameters<typeof IdItem>["0"]["rounded"] =
                (() => {
                  if (result.length === 1) return "both";
                  if (i === 0) return "top";
                  if (i === result.length - 1) return "bottom";
                  return "none";
                })();
              return (
                <li key={id}>
                  <IdItem
                    id={id.toString()}
                    color={color}
                    rounded={rounded}
                    onClick={() => {}}
                    isCompleted={true}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </Sheet>
  );
};

type SelectButtonProps = {
  on: boolean;
  onClick: () => void;
  text: string;
};

const SelectButton: React.FC<SelectButtonProps> = ({ onClick, on, text }) => {
  const variants = on
    ? "flex items-center justify-between w-full px-5 py-2 rounded-md  bg-bg-primary text-text-on-bg-primary border border-primary"
    : "flex items-center justify-between w-full px-5 py-2 rounded-md  border-bg-primary border";
  return (
    <button className={variants} onClick={onClick}>
      <div>{text}</div>
      <div
        className={
          on
            ? "text-sm text-text-on-bg-primary"
            : "text-sm text-text-on-primary"
        }
      >
        {on ? "有効" : "無効"}
      </div>
    </button>
  );
};
