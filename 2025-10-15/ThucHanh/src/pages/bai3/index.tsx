import * as S from "./index.styles";
import { usePosts } from "../../hooks/use-posts";
import type { DataPost } from "../../interfaces";
import { formatDate } from "../../utils";

const Bai3 = () => {
    const { data: rawData, error, isLoading } = usePosts();
    const dataPosts: DataPost[] = rawData?.results || [];

    return (
        <S.Container>
            <div className="title">Tin tức</div>
            {error && (
                <div className="error">Có lỗi xảy ra: {error.message}</div>
            )}
            {isLoading && <div>Đang tải...</div>}
            <div className="post-group">
                {dataPosts.map((post) => (
                    <div className="post-item" key={post.id}>
                        <img src={post.image_url} alt={post.title} />
                        <div className="title-item">{post.title}</div>
                        <div className="desc-item">{post.summary}</div>
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Đọc thêm tại {post.news_site}
                        </a>
                        <div className="date">
                            Ngày đăng: {formatDate(post.published_at)}
                        </div>

                        <hr />
                    </div>
                ))}
            </div>
        </S.Container>
    );
};

export default Bai3;
