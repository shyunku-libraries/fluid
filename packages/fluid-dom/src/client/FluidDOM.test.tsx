import { VNode } from "../shared/FluidDOMTypes";
import { createElement, render } from "./FluidDOM";

describe("FluidDOM", () => {
  it("should pass", () => {
    const testRoot: VNode = createElement("div", null, "Hello, World!");
    const rootNode: Node = render(testRoot);
    document.body.appendChild(rootNode);

    expect(document.body.innerHTML).toBe("<div>Hello, World!</div>");
  });
});

describe("FluidDOM jsx", () => {
  it("should pass", () => {
    const testRoot: VNode = (
      <div className="source">
        <h1>Hello, World!</h1>
        <p>This is a paragraph</p>
      </div>
    );
    const rootNode: Node = render(testRoot);
    document.body.appendChild(rootNode);

    expect(document.body.innerHTML).toBe("<div><h1>Hello, World!</h1><p>This is a paragraph</p></div>");
  });
});
