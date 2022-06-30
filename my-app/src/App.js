import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
