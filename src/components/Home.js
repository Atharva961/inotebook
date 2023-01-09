import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Notes from './Notes';

const Home = () => {


  return (
    <div>
      <div className="container">
        <Notes />
      </div>
    </div>
  )
}

export default Home
