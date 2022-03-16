import { Fragment } from "react"
import Header from './components/Header';
import PostsBoard from "./components/PostsBoard";
import ProfileBox from './components/ProfileBox';

function App() {
  return ( <Fragment>
               <Header />
               <ProfileBox />
               <PostsBoard />           

           </Fragment>
   
  );
}

export default App;
