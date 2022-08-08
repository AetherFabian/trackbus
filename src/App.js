import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './views/main.js';
import TrackMaps from './views/maps.js';
//import FeedBack from './views/feedback.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<TrackMaps />} />
      </Routes>
    </Router>
  );
}

export default App;
