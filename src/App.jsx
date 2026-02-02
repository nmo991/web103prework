import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/:id" element={<ViewCreator />} />
        <Route path="/:id/edit" element={<EditCreator />} />
        <Route path="/new" element={<AddCreator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;