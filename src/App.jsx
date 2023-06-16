import React from 'react';
import Nav from './components/NavBarDiv/NavBar'
import Search from './components/SearchDiv/Search';
import Job from './components/JobDiv/Job';
import Value from './components/ValueDiv/Value';
import Footer from './components/FooterDiv/Footer';

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Nav/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>


    </div>
  )
}

export default App
