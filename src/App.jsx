import { Route, Routes } from 'react-router-dom';
import { PATHS } from './constant/path';
import Login from './pages/LoginPage/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={<Login />} />
      <Route path={PATHS.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default App;
