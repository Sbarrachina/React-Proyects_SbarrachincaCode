import './App.css';

import React from 'react';
import Gallery from './components/Gallery';

const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://cdn.pixabay.com/photo/2016/11/08/08/47/moon-1807743__340.jpg',
  'https://st2.depositphotos.com/4211709/7708/i/600/depositphotos_77086607-stock-photo-tree-in-lake.jpg'
];

function App() {
  return (
    <div className="App">
    <Gallery images={images} />
    </div>
    );
    }
    



export default App;
