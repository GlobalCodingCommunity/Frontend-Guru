import { useState } from 'react';
import ProblemLayout from '../../components/ProblemLayout';
import ProblemHeader from '../../components/ProblemHeader';
import ProblemDescription from '../../components/ProblemDescription';
import ProblemResult from '../../components/ProblemResult';

function UITodoListPage() {
  const [tasks, setTasks] = useState<{ id: string; value: string }[]>([
    { id: '1', value: 'Walk the dog' },
    { id: '2', value: 'Water the plants' },
    { id: '3', value: 'Wash the dishes' },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const newTaskObj = {
      id: Date.now().toString(),
      value: newTask.trim(),
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ProblemLayout>
      <ProblemHeader category="UI" page="Todo List">
        <ProblemDescription>
          {`- Add new tasks by clicking the "Submit" button.
- The input field should be cleared after a task is successfully added.
- Remove tasks from the todo list by clicking the "Delete" button.`}
        </ProblemDescription>
      </ProblemHeader>

      <ProblemResult>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add your task"
              value={newTask}
              onChange={handleChange}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>

          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.value}</span>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </ProblemResult>
    </ProblemLayout>
  );
}

export default UITodoListPage;