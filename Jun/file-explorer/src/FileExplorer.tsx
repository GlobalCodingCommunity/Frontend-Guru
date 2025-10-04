import { useState } from "react";

interface Directory {
  id: string;
  name: string;
  children?: Directory[];
}

function ChildrenList({ data }: { data: Directory[] }) {
  const alphabeticSorted = data.sort((a, b) => a.name.localeCompare(b.name));
  const folders = alphabeticSorted.filter(({ children }) => children);
  const files = alphabeticSorted.filter(({ children }) => !children);

  const sortedData = [...folders, ...files];
  return (
    <ul>
      {sortedData.map(({ id, name, children }) => {
        return <Directory key={id} name={name} data={children} />;
      })}
    </ul>
  );
}

function Directory({ name, data }: { name: string; data?: Directory[] }) {
  const [expend, toggleExpend] = useState(false);

  return (
    <li>
      {data ? (
        <button onClick={() => toggleExpend((state) => !state)}>{name}</button>
      ) : (
        <span>{name}</span>
      )}

      {data && expend && <ChildrenList data={data} />}
    </li>
  );
}

export default function FileExplorer({ data }: { data: Directory[] }) {
  return (
     <ChildrenList data={data} />
  );
}
