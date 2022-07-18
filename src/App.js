

import Feed from './Feed';
import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import Widgets from './Widgets';
import Login from './Login';


function App() {
  const user=null;
  return (
    <div className="app">
    {!user?(
      <Login />
    ) :(
      <>
 <Header />
 <div className="app_body">

 <Sidebar />
 <Feed/>
 <Widgets />
    </div>
    </>
    )}
    </div>
  );
}
export default App;
