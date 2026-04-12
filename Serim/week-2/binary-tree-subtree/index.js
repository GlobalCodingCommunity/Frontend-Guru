function isSameTree(p, q) {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

export default function binaryTreeSubtree(root, subRoot) {
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;

  return (
    binaryTreeSubtree(root.left, subRoot) ||
    binaryTreeSubtree(root.right, subRoot)
  );
}
