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
import TestComponentPost from './components/TestComponentPost';
import PostsTest2 from './components/PostsTest2'
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
        <Route path='test' element={<TestComponentPost />} />
        <Route path='test2' element={<PostsTest2 />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}
export default App


