export type Everything = {} | null | undefined;

export const isNotNullOrUndefined = <T>(
  v: T
): v is T extends null | undefined ? never : T => v !== null || v !== undefined;

export const isNotOptionalOnId = <T extends { id?: unknown }>(
  v: T
): v is T & { id: Exclude<T["id"], undefined> } => {
  return Object.hasOwn(v, "id") && v.id !== undefined;
};
