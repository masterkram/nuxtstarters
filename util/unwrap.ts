export const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
export function isTag(vnode: any, tag: any) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
export function isText(vnode: any) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
export function nodeChildren(node: any) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
export function nodeTextContent(node: any): string {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}
export function unwrap(vnode: any, tags: Array<string> = []): Array<any> {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function _flatUnwrap(vnodes: any, tags: Array<string> = []) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes
    .flatMap((vnode: any) =>
      _flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))
    )
    .filter(
      (vnode: any) => !(isText(vnode) && nodeTextContent(vnode).trim() === "")
    );
}
export function flatUnwrap(vnodes: any, tags: Array<string> | string = []) {
  if (typeof tags === "string") {
    tags = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  if (!tags.length) {
    return vnodes;
  }
  return _flatUnwrap(vnodes, tags).reduce((acc: any, item: any) => {
    if (isText(item)) {
      if (typeof acc[acc.length - 1] === "string") {
        acc[acc.length - 1] += item.children;
      } else {
        acc.push(item.children);
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
