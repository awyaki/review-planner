"use client";
import { Sheet } from "@/components";
import { IdItem } from "../IdItem";
import { useSearchId } from "./hooks";

type Props = {
  ids: number[];
  onClose: () => void;
};

export const SearchPublishedIdSheet: React.FC<Props> = ({ onClose, ids }) => {
  const [{ query, maxIdQuery, minIdQuery, result }, dispatch] =
    useSearchId(ids);
  return (
    <Sheet color="reverse" onClose={onClose}>
      <div className="px-5">
        <section className="mb-8">
          <h2 className="mb-3 text-lg">検索条件</h2>
          <div className="flex items-center justify-between w-full px-5 py-2 mb-2 border rounded-md text-text-on-primary border-text-on-primary">
            <label htmlFor="searchById">IDで検索</label>
            <input
              id="searchById"
              className="w-20 px-2 text-right rounded-sm outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
              value={query}
              onChange={(e) =>
                dispatch({ type: "changed_query", query: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between w-full px-5 py-2 mb-2 border rounded-md text-text-on-primary border-text-on-primary">
            <span>範囲で検索</span>
            <div>
              <div className="mb-3">
                <label htmlFor="min-query" className="mr-2 text-sm">
                  最小
                </label>
                <input
                  id="min-query"
                  className=" w-20 px-2 text-right rounded-sm outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
                  inputMode="numeric"
                  value={minIdQuery}
                  onChange={(e) =>
                    dispatch({
                      type: "changed_minIdQuery",
                      minIdQuery: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="max-query" className="mr-2 text-sm">
                  最大
                </label>
                <input
                  id="max-query"
                  className="w-20 px-2 text-right rounded-sm outline-dark-gray border-text-on-bg-primary bg-light-gray text-dark-gray"
                  inputMode="numeric"
                  value={maxIdQuery}
                  onChange={(e) =>
                    dispatch({
                      type: "changed_maxIdQuery",
                      maxIdQuery: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
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
