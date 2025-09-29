import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProblemList from "./problems/ProblemList";
import ProblemPage from "./problems/ProblemPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path="/problem/:name" element={<ProblemPage />} />
      </Routes>
    </Router>
  );
}