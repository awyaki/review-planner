export type Everything = {} | null | undefined;

export const isNotNullOrUndefined = <T>(
  v: T
): v is T extends null | undefined ? never : T => v !== null || v !== undefined;
