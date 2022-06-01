import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
// import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Work from './Pages/Work';
import SingleWorkMore from './Pages/SingleWorkMore';

const App = function () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:id' element={<SingleWorkMore />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
