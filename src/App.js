import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { CreateFormsProvider } from './context/CreateFormsContext';
import CreateFormPage from './pages/CreateFormPage';
import FormPage from './pages/FormPage';
import { FormsProvider } from './context/FormsContext';

function App() {
  return (
    <FormsProvider>
    <CreateFormsProvider>
        <Routes>
          <Route path='/' element={<CreateFormPage />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
    </CreateFormsProvider>
    </FormsProvider>
  );
}


export default App;
