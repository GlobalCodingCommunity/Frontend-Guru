import { useState } from "react";

export default function App(){
  const panels=[
          {
            value: 'html',
            label: 'HTML',
            panel:
              'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
          },
          {
            value: 'css',
            label: 'CSS',
            panel:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
          },
          {
            value: 'javascript',
            label: 'JavaScript',
            panel:
              'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
          },
        ]
  return(<Tabs panels={panels}/>)
}
 function Tabs({ panels }) {
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
            <p key={panel.value}>{panel.panel}</p>
          ) : null,
        )}
      </div>
    </div>
  );
}
