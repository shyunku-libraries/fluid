export class ErrorPosition {
  line: number;
  column: number;

  constructor(line: number, column: number) {
    this.line = line;
    this.column = column;
  }

  toString() {
    return `${this.line}:${this.column}`;
  }
}

export class CompileError extends Error {
  name: string = "CompileError";
  filename?: string;
  position?: ErrorPosition[];
  start?: ErrorPosition;
  end?: ErrorPosition;
  source?: string;
  code?: string;

  constructor(message: string, filename?: string, code?: string, position?: ErrorPosition[]) {
    super(message);
    this.filename = filename;
    this.code = code;
    this.position = position;
  }

  toString() {
    let out = `${this.name}: ${this.message}`;

    out += `\n(${this.code})`;

    if (this.filename) {
      out += `\n${this.filename}`;

      if (this.start) {
        out += `${this.start.line}:${this.start.column}`;
      }
    }

    return out;
  }
}
