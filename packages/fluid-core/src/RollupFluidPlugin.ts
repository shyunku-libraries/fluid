import { TransformOptions, transcode } from "./FluidTransformer";

export default function RollupFluidPlugin(options?: TransformOptions) {
  return {
    name: "rollup-fluid-plugin",
    transform(source: string, id: string) {
      return transcode(source, id, options || { type: "esm" });
    },
  };
}
