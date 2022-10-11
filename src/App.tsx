import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import Home from './components/home';
import About from './components/about';
import Code from './components/code';
import GraphicDesign from './components/graphicdesign';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/graphicdesign" element={<GraphicDesign />}></Route>
          <Route path="/code" element={<Code />}></Route>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
