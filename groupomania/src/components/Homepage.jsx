import '../css/style.css';
import { Navigate} from 'react-router-dom';
import PopUpbox from './PopUpbox';
import ProfileBox from './ProfileBox';
import PostsBoard from './PostsBoard';
import PostsTest2 from './PostsTest2';
import Widget from './Widget';
import UserProfile from './UserProfile';
function Homepage(){
    if(!sessionStorage.getItem('token') ){
        
        return <Navigate to={"/signin"} />;
    }
    return(    <>
        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <ProfileBox />
                            <PostsTest2 />
                            {/* <PostsBoard /> */}
                            <Widget />
                            {/* <UserProfile /> */}
                        </div>
                    </div>
                </div>
            </div>
          
        </main>
         <PopUpbox />
         </>

                
                 
              
    )
}
export default Homepage