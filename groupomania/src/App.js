import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Header from './components/Header';
import PostsBoard from "./components/PostsBoard";
import ProfileBox from './components/ProfileBox';
import Widget from "./components/Widget";
import PopUpbox from "./components/PopUpbox";
import Companies from './components/Companies';
import CompanyProfile from './components/CompanyProfile';
import Footer from './components/Footer';
import ForumPostView from './components/ForumPostView';
import Forum from './components/Forum';
import Jobs from './components/Jobs';
import Messages from './components/Messages';
import MyProfileFeed from './components/MyProfileFeed';
import ProfileAccountSetting from './components/ProfileAccountSetting';
import Profiles from './components/Profiles';
import SecondarySearchBar from './components/SearchBarSecondary';
import Projects from './components/Projects';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import { Fragment } from 'react';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      
       
      
      
      <Routes>
        <Route path='/' element={<div className="wrapper">
<header>
  <Header />
</header>
<main>
  <div className="main-section">
    <div className="container">
      <div className="main-section-data">
        <div className="row">
          <ProfileBox />
          <PostsBoard />
          <Widget /> 
          <UserProfile />
       </div>
       </div>
     </div>
   </div>
 </main>
 <PopUpbox />
  </div>
          
          } />
        <Route path='companies' element={<div><Header /> <Companies /></div>} />
        <Route path='forum' element={<Forum />} />
        <Route path='usreprofile' element={<UserProfile />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='projects' element={<Projects />} />
        <Route path='companyprofile' element={<CompanyProfile />} />
        <Route path='*' element={<PageNotFound />} />
       
      </Routes>
    </Router>
  )
}
export default App


{/* <div className="wrapper">
<header>
  <Header />
</header>
<main>
  <div className="main-section">
    <div className="container">
      <div className="main-section-data">
        <div className="row">
          <ProfileBox />
          <PostsBoard />
          <Widget /> 
          {/* <Companies /> */}
          {/* <CompanyProfile /> */}
          {/* <Footer /> */}
          {/* <ForumPostView /> */}
          {/* <Forum /> */}
          {/* <Jobs /> */}
          {/* <Messages /> */}
          {/* <MyProfileFeed /> */}
          {/* <ProfileAccountSetting /> */}
          {/* <Profiles /> */}
          {/* <SecondarySearchBar />
          <Projects /> */}
          {/* <SignIn /> */}
//           <UserProfile />
//         </div>
//       </div>
//     </div>
//   </div>
// </main>
// <PopUpbox />
// </div> */}