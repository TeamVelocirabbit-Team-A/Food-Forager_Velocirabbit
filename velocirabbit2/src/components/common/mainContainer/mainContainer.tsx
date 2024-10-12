import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../../../pages/Register';
import LoginPage from '../../../pages/Login';

const MainContainer: React.FC = () => {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
 }

export default MainContainer;