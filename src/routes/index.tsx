import { createBrowserRouter } from 'react-router-dom';
import { CultivationPage } from '@/pages/CultivationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CultivationPage />,
  },
]);
