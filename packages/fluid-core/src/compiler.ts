import { getLocator } from "locate-character";
import { CompileError } from "./errors";

export function compile(source, options) {
  try {
  } catch (e) {
    if (e instanceof CompileError) {
    }
  }
}

function handleCompileError(e: CompileError, filename: string, source: string) {
  e.filename = filename;

  if (e.position) {
    const locator = getLocator(source, { offsetLine: 1 });
    const start = locator(e.position[0]);
    const end = locator(e.position[1]);

    e.start = start;
    e.end = end;
  }
}
