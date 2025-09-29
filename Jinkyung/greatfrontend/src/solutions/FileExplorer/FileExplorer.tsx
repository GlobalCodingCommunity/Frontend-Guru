import { useState } from "react";

export default function FileExplorer({ data,level=1 }) {
  return (
    <ul role={level===1?'tree':'group'} aria-label={level === 1 ? "File Explorer" : undefined}>
      {data.map((node,index) => (
        <FileNode node={node} key={node.id} level={level} posInSet={index+1} setSize={data.length}/>
      ))}
    </ul>
  );
}

function FileNode({ node ,level,posInSet,setSize }) {
  const isFolder = node.children;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li style={{ marginLeft: "10px" }} role="treeitem" aria-level={level} aria-posInSet={posInSet} aria-setsize={setSize} aria-expanded={isFolder?isOpen:undefined}>
      <div
        style={{ fontWeight: isFolder ? "bold" : "" }}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        {node.name} {isFolder ? (isOpen?'[-]':'[+]') : ""}
      </div>
      <div>{isFolder && isOpen && <div role="group"><FileExplorer data={node.children} level={level+1}/></div>}</div>
    </li>
  );
}
