import { Fragment } from "react"
import Header from './components/Header';
import PostsBoard from "./components/PostsBoard";
import ProfileBox from './components/ProfileBox';
import Widget from "./components/Widget";

function App() {
  return ( <Fragment>
               <Header />
               <ProfileBox />
               <PostsBoard />           
               <Widget />
           </Fragment>
   
  );
}

export default App;
