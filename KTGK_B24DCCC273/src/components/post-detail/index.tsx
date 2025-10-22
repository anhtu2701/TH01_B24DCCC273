import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import BaseButton from '../common/base-button';
import {
  Container,
  Thumbnail,
  Title,
  Meta,
  Category,
  Content,
  Actions,
  NotFound,
} from './index.styles';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, deletePost } = usePosts();

  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return (
      <Container>
        <NotFound>Không tìm thấy bài viết</NotFound>
        <Actions>
          <BaseButton onClick={() => navigate('/')}>
            Quay lại trang chủ
          </BaseButton>
        </Actions>
      </Container>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      deletePost(post.id);
      navigate('/');
    }
  };

  return (
    <Container>
      <Thumbnail src={post.thumbnailUrl} alt={post.title} />
      <Title>{post.title}</Title>
      <Meta>
        <span>{post.author} |</span>
        <span>{post.createdAt}</span>
        <Category>{post.category}</Category>
      </Meta>
      <Content>{post.content}</Content>
      <Actions>
        <BaseButton onClick={() => navigate('/')}>
          Quay lại
        </BaseButton>
        <BaseButton onClick={() => navigate(`/posts/edit/${post.id}`)}>
          Chỉnh sửa
        </BaseButton>
        <BaseButton onClick={handleDelete} variant="danger">
          Xóa bài viết
        </BaseButton>
      </Actions>
    </Container>
  );
};

export default PostDetail;