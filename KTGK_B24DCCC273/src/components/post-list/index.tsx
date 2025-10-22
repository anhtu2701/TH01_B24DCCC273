import { useState } from 'react';
import { usePosts } from '../../context/PostContext';
import PostCard from '../post-card';
import {
  Container,
  Header,
  Title,
  FilterWrapper,
  SearchInput,
  PostCount,
  Grid,
  EmptyState,
} from './index.styles';

const PostList = () => {
  const { posts } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>Danh sách bài viết</Title>
      </Header>
      
      <FilterWrapper>
        <SearchInput
          type="text"
          placeholder="🔍 Tìm kiếm theo tiêu đề..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <PostCount>
          Tổng số: <strong>{filteredPosts.length}</strong> bài viết
        </PostCount>
      </FilterWrapper>

      {filteredPosts.length === 0 ? (
        <EmptyState>
          {searchTerm ? 'Không tìm thấy bài viết nào' : 'Chưa có bài viết nào'}
        </EmptyState>
      ) : (
        <Grid>
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PostList;