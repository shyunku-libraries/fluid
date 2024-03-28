const IMPORT_REGEX = /import\s+.*\s+from\s+['"](.*)['"]/g;
const EXPORT_REGEX = /export\s+.*\s+from\s+['"](.*)['"]/g;

export interface TransformOptions {
  type: "commonjs" | "esm";
}

export function transcode(source: string, id: string, option: TransformOptions): any {
  if (!id.endsWith(".fluid")) {
    return null;
  }

  switch (option.type) {
    case "commonjs":
      source = transformCommonJs(source);
      break;
    case "esm":
      source = transformEsm(source);
      break;
    default:
      throw new Error("Invalid option");
  }

  const transformUnits: Function[] = [
    // transformClass,
    // transformListeners
  ];

  for (const unit of transformUnits) {
    source = unit(source);
  }

  return {
    code: source,
    map: { mappings: "" },
  };
}

function transformCommonJs(source: string): any {
  // find import statement and replace it with require
  return source;
}

function transformEsm(source: string): any {
  // find require statement and replace it with import
  console.warn("ESM is not supported yet");
  return source;
}

// function transformClass(source: string): any {
//   return transform(source, /class=/g, "class=");
// }

// function transformListeners(source: string): any {
//   return transform(source, /on([A-Z]\w+)/g, "on$1");
// }

function transform(source: string, original: RegExp, replace: string): any {
  return source.replace(original, replace);
}
