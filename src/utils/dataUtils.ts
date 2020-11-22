export function getNodeData(nodeKey: string, nodes: Array<any>) {
  return nodes.find((node) => !!node[nodeKey]);
}
