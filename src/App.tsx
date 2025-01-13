import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CultivationPage from './pages/CultivationPage';
import TasksPage from './pages/TasksPage';
import DemonsPage from './pages/DemonsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cultivation" element={<CultivationPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/demons" element={<DemonsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
