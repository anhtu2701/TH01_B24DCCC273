import { useNavigate } from 'react-router-dom';
import type { Post } from '../../types';
import { usePosts } from '../../context/PostContext';
import BaseButton from '../common/base-button';
import {
  Card,
  Thumbnail,
  CardBody,
  Title,
  Meta,
  Category,
  Description,
  Actions,
} from './index.styles';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const { deletePost } = usePosts();

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      deletePost(post.id);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <Card>
      <Thumbnail src={post.thumbnailUrl} alt={post.title} />
      <CardBody>
        <Title>{post.title}</Title>
        <Meta>
          <span>{post.author} |</span>
          <span>{post.createdAt}</span>
        </Meta>
        <Category>{post.category}</Category>
        <Description>{truncateText(post.content, 100)}</Description>
        <Actions>
          <BaseButton onClick={() => navigate(`/posts/${post.id}`)} size="small">
            Đọc thêm
          </BaseButton>
          <BaseButton 
            onClick={handleDelete} 
            variant="danger" 
            size="small"
          >
            Xóa
          </BaseButton>
        </Actions>
      </CardBody>
    </Card>
  );
};

export default PostCard;