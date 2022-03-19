
import Header from './components/Header';
import PostsBoard from "./components/PostsBoard";
import ProfileBox from './components/ProfileBox';
import Widget from "./components/Widget";
import PopUpbox from "./components/PopUpbox";

function App() {
  return (
    <div className="wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <PopUpbox />
    </div>
  )
}
export default App
