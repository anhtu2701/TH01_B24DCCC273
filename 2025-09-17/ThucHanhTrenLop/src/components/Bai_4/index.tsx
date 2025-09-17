import { useState } from "react";
import BaseTitle from "../common/BaseTitle";
import BaseDescription from "../common/BaseDescription";
import BaseWrapped from "../common/BaseWrapped";
import { BaseButton } from "../common/BaseButton";
import * as S from './index.styles'
import { POSTS_DATA } from "../../constants/data";
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

interface IPost {
    id: number;
    title: string;
    likes: number;
    dislikes: number;
    color: string;
}

const Bai_4 = () => {
    const [posts, setPosts] = useState<IPost[]>([ ...POSTS_DATA ]);

    const handleLike = (postId: number) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? { ...post, likes: post.likes + 1 }
                    : post
            )
        );
    };

    const handleDislike = (postId: number) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? { ...post, dislikes: post.dislikes + 1 }
                    : post
            )
        );
    };

    return (
        <BaseWrapped>
            <BaseTitle title="Bài 4: Like/Dislike Post" />
            <BaseDescription content="Có component Post hiển thị một đoạn text và 2 nút: Like và Dislike. Khi nhấn Like → tăng số lượt like. Khi nhấn Dislike → tăng số lượt dislike. App có thể render 2–3 post khác nhau." />

            {posts.map(post => (
                <S.Box key={post.id} color={post.color}>
                    <S.TitleBox>{post.title}</S.TitleBox>
                    <S.ButtonContainer>
                        <BaseButton color="primary" variant="filled" onClick={() => handleLike(post.id)}>
                            <LikeOutlined /> {post.likes}
                        </BaseButton>
                        <BaseButton color="danger" variant="filled" onClick={() => handleDislike(post.id)}>
                            <DislikeOutlined /> {post.dislikes}
                        </BaseButton>
                    </S.ButtonContainer>
                </S.Box>
            ))}
        </BaseWrapped>
    )
}

export default Bai_4