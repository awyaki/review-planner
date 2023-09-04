import { NDaysAfterForPreset, Preset } from "@/db";

// data type for client side

export type NDaysAfterForPresetForClient = Required<
  Omit<NDaysAfterForPreset, "belongTo">
>;

export type PresetForClient = Required<Preset>;
