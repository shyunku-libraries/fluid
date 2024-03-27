export interface VNode {
  tagName: string;
  props: Record<string, any>;
  children: (VNode | string)[];
  key?: string | number;
}

export interface Patch {
  type: PatchType;
  payload: any;
}

export const PatchType = {
  REPLACE: "REPLACE",
  UPDATE_ATTRIBUTES: "UPDATE_ATTRIBUTES",
  UPDATE_CHILDREN: "UPDATE_CHILDREN",
} as const;
export type PatchType = (typeof PatchType)[keyof typeof PatchType];
