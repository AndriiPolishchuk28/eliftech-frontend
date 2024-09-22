import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ViewPage from './pages/ViewPage/ViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register/:id" element={<RegisterPage />}></Route>
      <Route path="/participants/:id" element={<ViewPage />}></Route>
    </Routes>
  );
}
export default App;
