import { useState } from "react";

export default function Tabs({ panels }) {
  const [tab, setTab] = useState(panels[0].value);
  const tabs = panels.map((panel) => panel.value);

  return (
    <div>
      <div>
        {tabs.map((t) => {
          return (
            <button
              id={t}
              key={t}
              onClick={() => {
                setTab(t);
              }}
              style={{
                fontWeight: tab === t ? "bold" : "normal",
                textDecoration: tab === t ? "underline" : "none",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
      <div>
        {" "}
        {panels.map((panel) =>
          tab === panel.value ? (
            <p key={panel.value}>{panel.contents}</p>
          ) : null,
        )}
      </div>
    </div>
  );
}
