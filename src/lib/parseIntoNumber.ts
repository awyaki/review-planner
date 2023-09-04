class CantParseIntoNumuberError extends Error {}

const isNumber = (o: unknown): o is number => {
  if (typeof o === "number") return true;
  return false;
};

export const parseIntoNumber = (
  o: unknown
): number | CantParseIntoNumuberError => {
  if (isNumber(o)) return o;
  return new CantParseIntoNumuberError();
};
