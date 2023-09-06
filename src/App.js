import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { FormsProvider } from './context/FormsContext';
import CreateFormPage from './pages/CreateFormPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <FormsProvider>
        <Routes>
          <Route path='/' element={<CreateFormPage />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
    </FormsProvider>
  );
}


export default App;
