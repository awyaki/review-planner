export type Id = {
  id?: number;
};

export type NDaysAfter = {
  id?: number;
  belongTo: number;
  n: number;
  base: Date;
};

export type Preset = {
  id?: number;
  name: string;
};

export type NDaysAfterForPreset = {
  id?: number;
  n: number;
  belongTo: number;
};

export type TodayId = {
  id: number; // not autoincrement
  createdAt: Date;
  done: boolean;
};

// data type for client side

export type NDaysAfterForClient = Required<Omit<NDaysAfter, "belongTo">>;

export type NDaysAfterForPresetForClient = Required<
  Omit<NDaysAfterForPreset, "belongTo">
>;

export type PresetForClient = Required<Preset> & {
  nDaysAfters: NDaysAfterForPresetForClient[];
};
