import { TransformOptions, transcode } from "./FluidTransformer";

export default {
  process: (source: string, filename: string) => {
    return transcode(source, filename, { type: "commonjs" });
  },
};
