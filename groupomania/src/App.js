import {BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound';
import Homepage from './components/Homepage';
import PostView from './components/PostView'
import EditPost from './components/EditPost';
import ViewProfile from './components/ViewProfile';

function App() {
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
        <Route path='/' element={ <Homepage />} />       
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