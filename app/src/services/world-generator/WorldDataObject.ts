export type WorldDataObject<N = string, T = string, V = {}> = {
  name: N;
  id: number;
  desc: string;
  type: T;
  values: V;
  qty?: number;
};
