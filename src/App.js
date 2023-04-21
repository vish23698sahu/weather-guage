import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ComparisionChart from './components/comparison/ComparisonChart';
import TimesSeries from './components/timeSeries/TimesSeries';
import WindiestDays from './components/windGuage/WindGuage';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comparison' element={<ComparisionChart />} />
        <Route path='/time-series' element={<TimesSeries />} />
        <Route path='/windiest-day' element={<WindiestDays />} />
      </Routes>
    </div>
  );
}

export default App;
