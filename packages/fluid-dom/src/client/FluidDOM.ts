import { PatchType, type Patch, type VNode } from "../shared/FluidDOMTypes";

export function createElement(
  tagName: string,
  props: Record<string, any> | null,
  ...children: (VNode | string)[]
): VNode {
  return {
    tagName,
    props: props || {},
    children,
  };
}

// renders <virtual dom | vnode | string> to real dom
export function render(vnode: VNode | string): Node {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const node = document.createElement(vnode.tagName);

  Object.entries(vnode.props).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  vnode.children.forEach((child: any) => {
    node.appendChild(render(child));
  });

  return node;
}

// calculates the difference between two virtual doms
export function diff(oldVTree: VNode | string, newVTree: VNode | string): Patch[] {
  if (typeof newVTree === "string") {
    if (newVTree !== oldVTree) {
      return [{ type: PatchType.REPLACE, payload: newVTree }];
    } else {
      return [];
    }
  }

  if (typeof oldVTree === "string" || oldVTree.tagName !== newVTree.tagName) {
    return [{ type: PatchType.REPLACE, payload: newVTree }];
  }

  const patches: Patch[] = [];

  const attrPatches: Patch[] = diffAttributes(oldVTree.props, newVTree.props);
  if (attrPatches.length > 0) {
    patches.push(...attrPatches);
  }

  const childPatches: Patch[] = diffChildren(oldVTree.children, newVTree.children);
  if (childPatches.length > 0) {
    patches.push(...childPatches);
  }

  return patches;
}

export function diffAttributes(oldProps: Record<string, any>, newProps: Record<string, any>): Patch[] {
  const patches: Patch[] = [];

  const allKeys = Object.keys({ ...oldProps, ...newProps });

  allKeys.forEach((key) => {
    if (oldProps[key] !== newProps[key]) {
      patches.push({ type: PatchType.UPDATE_ATTRIBUTES, payload: { key, value: newProps[key] } });
    }
  });

  return patches;
}

export function diffChildren(oldChildren: (VNode | string)[], newChildren: (VNode | string)[]): Patch[] {
  const patches: Patch[] = [];

  const childLength = Math.max(oldChildren.length, newChildren.length);

  for (let i = 0; i < childLength; i++) {
    const oldChild = oldChildren[i];
    const newChild = newChildren[i];

    const childPatches = diff(oldChild, newChild);
    patches.push(...childPatches);
  }

  return patches;
}

// apply difference to real dom
export function patch(parent: Node, patches: Patch[], index = 0): void {
  if (!patches || patches.length === 0) {
    return;
  }

  const elem = parent.childNodes[index];

  patches.forEach((patch) => {
    switch (patch.type) {
      case PatchType.REPLACE:
        const newElem = render(patch.payload);
        parent.replaceChild(newElem, elem);
        break;
      case PatchType.UPDATE_ATTRIBUTES:
        const { key, value } = patch.payload;
        if (value === null) {
          (elem as Element).removeAttribute(key);
        } else {
          (elem as Element).setAttribute(key, value);
        }
        break;
      case PatchType.UPDATE_CHILDREN:
        patchChildren(elem as Node, patch.payload);
        break;
      default:
        throw new Error(`Unknown patch type: ${patch.type}`);
    }
  });
}

function patchChildren(parent: Node, childPatches: Patch[][]): void {
  childPatches.forEach((patches, i) => patch(parent, patches, i));
}

// const myVTree: VNode = createElement(
//   "div",
//   { id: "app" },
//   createElement("h1", null, "Hello, Virtual DOM"),
//   createElement("p", null, "This is an example.")
// );

// const rootNode: Node = render(myVTree);
// document.body.appendChild(rootNode);
