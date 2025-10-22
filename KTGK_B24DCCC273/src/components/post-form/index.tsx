import { useState, useEffect, type FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import type { PostFormData } from '../../types';
import BaseInput from '../common/base-input';
import BaseTextarea from '../common/base-textarea';
import BaseSelect from '../common/base-select';
import BaseButton from '../common/base-button';
import { Container, Title, Form, Actions } from './index.styles';

const PostForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, addPost, updatePost } = usePosts();

  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    author: '',
    thumbnailUrl: '',
    content: '',
    category: 'Khác',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PostFormData, string>>>({});

  useEffect(() => {
    if (id) {
      const post = getPostById(id);
      if (post) {
        setFormData({
          title: post.title,
          author: post.author,
          thumbnailUrl: post.thumbnailUrl,
          content: post.content,
          category: post.category,
        });
      }
    }
  }, [id, getPostById]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof PostFormData, string>> = {};

    if (!formData.title || formData.title.length < 10) {
      newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự';
    }

    if (!formData.author || formData.author.length < 3) {
      newErrors.author = 'Tác giả phải có ít nhất 3 ký tự';
    }

    if (!formData.content || formData.content.length < 50) {
      newErrors.content = 'Nội dung phải có ít nhất 50 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (id) {
      updatePost(id, formData);
      alert('Cập nhật thành công!');
      navigate(`/posts/${id}`);
    } else {
      addPost(formData);
      alert('Đăng bài thành công!');
      navigate('/');
    }
  };

  const handleCancel = () => {
    if (id) {
      navigate(`/posts/${id}`);
    } else {
      navigate('/');
    }
  };

  const categoryOptions = [
    { value: 'Công nghệ', label: 'Công nghệ' },
    { value: 'Du lịch', label: 'Du lịch' },
    { value: 'Ẩm thực', label: 'Ẩm thực' },
    { value: 'Đời sống', label: 'Đời sống' },
    { value: 'Khác', label: 'Khác' },
  ];

  return (
    <Container>
      <Title>{id ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</Title>
      <Form onSubmit={handleSubmit}>
        <BaseInput
          label="Tiêu đề *"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          error={errors.title}
          placeholder="Nhập tiêu đề bài viết (ít nhất 10 ký tự)"
        />

        <BaseInput
          label="Tác giả *"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          error={errors.author}
          placeholder="Nhập tên tác giả (ít nhất 3 ký tự)"
        />

        <BaseInput
          label="URL ảnh thumbnail"
          value={formData.thumbnailUrl}
          onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />

        <BaseSelect
          label="Thể loại *"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
          options={categoryOptions}
        />

        <BaseTextarea
          label="Nội dung *"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          error={errors.content}
          placeholder="Nhập nội dung bài viết (ít nhất 50 ký tự)"
          rows={10}
        />

        <Actions>
          <BaseButton type="submit">
            {id ? 'Cập nhật' : 'Đăng bài'}
          </BaseButton>
          <BaseButton type="button" variant="secondary" onClick={handleCancel}>
            Hủy
          </BaseButton>
        </Actions>
      </Form>
    </Container>
  );
};

export default PostForm;