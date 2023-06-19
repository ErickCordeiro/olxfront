import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Routes = () => {
  return useRoutes([
    {path: '', element: <Home />},
    {path: '/about', element: <About />}
  ]);
}

export default Routes;