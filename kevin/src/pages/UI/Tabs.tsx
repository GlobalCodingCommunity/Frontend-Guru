import { useState } from 'react';
import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  {
    id: 'html',
    label: 'HTML',
    content: 'HTML is the standard markup language for creating web pages.',
  },
  {
    id: 'css',
    label: 'CSS',
    content: 'CSS is used to style web pages.',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    content: 'JavaScript makes web pages interactive.',
  },
];
function UITabsPage() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <ProblemLayout>
      <ProblemHeader category="UI" page="Tabs">
        <ProblemDescription>
            {`- Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
        - At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
      <div>
        <div role="tablist" aria-label="Programming language tabs">
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;

            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                  marginRight: '8px',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => {
          const isActive = activeTabId === tab.id;

          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              style={{ marginTop: '12px' }}
            >
              {tab.content}
            </div>
          );
        })}
          </div>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UITabsPage;