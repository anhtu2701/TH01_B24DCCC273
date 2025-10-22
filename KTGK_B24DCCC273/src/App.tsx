import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import Navbar from './components/navbar';
import PostList from './components/post-list';
import PostDetail from './components/post-detail';
import PostForm from './components/post-form';
import './App.css';

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/edit/:id" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;