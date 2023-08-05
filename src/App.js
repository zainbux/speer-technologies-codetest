import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import ActivityFeed from './components/ActivityFeed';
import Archived  from './components/Archived';
import CallDetail from './components/CallDetail';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-[376px] h-[666px] z-100 bg-white ">

        <header className='justify-center items-center flex py-4'>
          <Header />
        </header>
        <hr className="border-t border-gray-300" /> 

        <Nav />

        <Routes className="flex-grow">
          <Route path="/" element={<ActivityFeed />}/>
          <Route path="/archived" element={<Archived />}/>
          <Route path="/:id" element={<CallDetail />}/>
        </Routes>


      </div>      
    </div>

  );
}

export default App;
