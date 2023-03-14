import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Create from './components/Main/create';
import Read from './components/Main/read';
import Update from './components/Main/update';
import ButtonAppBar from './components/Header';
function App() {
  return (
    <div className="main">
      <ButtonAppBar />
      <Routes>
          <Route path="/detail" element={<Read/>}></Route>
        </Routes>
        <Routes>
        <Route path="/create" element={<Create/>}></Route>
        </Routes>
        <Routes>
        <Route path="/update" element={<Update/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
