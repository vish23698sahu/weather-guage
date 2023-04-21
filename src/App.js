import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ComparisionChart from './components/comparison/ComparisonChart';
import TimesSeries from './components/timeSeries/TimesSeries';
import WindiestDays from './components/windGuage/WindGuage';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-theme');
  let btnVal;

  const handleThemeChangeClick = () => {
    console.log("Mode change Clicked");
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
    else {
      setTheme('light-theme')
    }
  }

  if (theme === 'light-theme') {
    btnVal = 'Dark Mode'
  }
  else {
    btnVal = 'Light Mode'
  }

  useEffect(() => {
    document.getElementById('appMain').className = theme;
  }, [theme]);

  return (
    <div id='appMain' className='light-theme'>
      <Navbar onThemeClick={handleThemeChangeClick} btnVal={btnVal} />
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
