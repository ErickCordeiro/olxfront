import { Routes, Route } from 'react-router-dom' 

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AdsUnique from '../pages/AdsUnique';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ad/:id" element={<AdsUnique />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;