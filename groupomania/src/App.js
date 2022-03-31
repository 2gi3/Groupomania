import {BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom'
import React,{ useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/Homepage';
import PostView from './components/PostView'
import EditPost from './components/EditPost';
import ViewProfile from './components/ViewProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect( () =>{

    if(sessionStorage.getItem('token')){
      setIsAuthenticated(true)
    }

   },[])
  return (
    <Router>
      <div className='wrapper'>
      <div className='container-fluid'>
				<div className='row'>
					<header>
						<Header />
					</header> 
				</div>
			</div>
        <Routes>
        <Route path='/' element={ <HomePage />} />       
        <Route path='signin' element={<SignIn />} />
        <Route path='postview' element={<PostView />} />
        <Route path='editpost' element={<EditPost />} />
        <Route path='viewprofile' element={<ViewProfile />} />      
        <Route path='*' element={<PageNotFound />} />   
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}
export default App


