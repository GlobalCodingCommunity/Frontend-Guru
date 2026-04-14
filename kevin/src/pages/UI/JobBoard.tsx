import { useState, useEffect, useMemo } from 'react';
import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';

const PAGE_SIZE = 6;
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

async function fetchJobIds(): Promise<number[]> {
  const res = await fetch(`${BASE_URL}/jobstories.json`);
  if (!res.ok) throw new Error('Failed to fetch job IDs');
  return res.json();
}

async function fetchJobDetail(id: number): Promise<any> {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);
  if (!res.ok) throw new Error(`Failed to fetch job ${id}`);
  return res.json();
}

async function fetchJobsByIds(ids: number[]): Promise<any[]> {
  return Promise.all(ids.map(fetchJobDetail));
}

function UIJobBoardPage() {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [jobsById, setJobsById] = useState<Record<number, any>>({});

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const visibleJobIds = useMemo(() => {
    return jobIds.slice(0, visibleCount);
  }, [jobIds, visibleCount]);

  useEffect(() => {
    async function init() {
      setIsLoading(true);
      setError(null);
      try {
        const ids = await fetchJobIds();
        setJobIds(ids);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  useEffect(() => {
    const missingIds = visibleJobIds.filter((id) => !jobsById[id]);
    if (missingIds.length === 0) return;

    async function loadJobsById() {
      try {
        const jobs = await fetchJobsByIds(missingIds);
        
        setJobsById((prev) => {
          const updatedJobsById = { ...prev };
        
          for (const job of jobs) {
            updatedJobsById[job.id] = job;
          }
        
          return updatedJobsById;
        });
      } catch (err) {
        setError(err);
      } 
    }
    loadJobsById();
  },[visibleJobIds])

  const handleMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (

    <ProblemLayout>
      <ProblemHeader category="UI" page="Job Board">
        <ProblemDescription>
          {`- The page should show 6 jobs on initial load with a button to load more postings.
- Clicking on the "Load more" button will load the next page of 6 postings.
- The button does not appear if there aren't any more postings to load.
- If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.
- The timestamp can be formatted in any way you like.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
      <div>
        <h1>Hacker News Jobs Board</h1>
        {
          error ? <p style={{ color: 'red' }}>
            Error occured: {error}
          </p> : <ul style={{ paddingLeft: 0 }}>{
              visibleJobIds.map((id) => {
                const job = jobsById[id];
                if (!job) return null;
                return <li key={id} 
                style={{
                  listStyle: 'none',
                  border: '1px solid #ccc',
                  marginBottom: '10px',
                  padding: '10px',
                  background: '#FFF',
                }}>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      {job.title}
                    </a>
                  ) : (
                    job.title
                  )}
                  <br />
                  <small>
                    Posted by {job.by} at {new Date(job.time * 1000).toLocaleString('en')}
                  </small>
                </li>
              }
              )
          }</ul>
        }
        {isLoading && <p>Loading...</p>}
        {visibleCount < jobIds.length && <button onClick={handleMore} disabled={(visibleCount >= jobIds.length)|| isLoading}>
          Load more jobs
        </button>}
      </div>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UIJobBoardPage;