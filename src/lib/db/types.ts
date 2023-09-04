import { NDaysAfterForPreset } from "@/db";

// data type for client side

export type NDaysAfterForPresetForClient = Required<
  Omit<NDaysAfterForPreset, "belongTo">
>;
