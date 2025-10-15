import * as S from "./index.styles";

const Home = () => (
    <S.Container>
        <div className="heading">
            Bài thực hành 02 - Hoàng Anh Tú - B24DCCC273
        </div>
        <div className="desc">
            - Mục tiêu: Áp dụng các kiến thức liên quan đến React trong lập
            trình web: Props, State, Lifecycle, Axios, Typescript, React-Router
        </div>
        <div className="desc">
            - Thời gian làm bài từ: 13h15 đến 16h45, sinh viên tạo repo trên
            Github, đặt tên là TH02_Mã sinh viên, vd: TH02_B24DCCC014
        </div>
        <div className="desc">
            - Sinh viên push code lên github và add thầy vào repo (tài khoản
            github: nhannv@ptit.edu.vn)
        </div>

        <div className="title">Bài 1: Ứng dụng thời tiết</div>
        <div className="desc">
            - Sinh viên sử dụng axios để lấy dữ liệu qua địa chỉ https://wttr.in/tenThanhPho?format=j1, trong đó tenThanhPho là tên thành phố do người dùng nhập vào
        </div>
        <div className="desc">
            - Hiển thị kết quả là thông tin thời tiết của thành phố (Nhiệt độ, tình trạng thời tiết)
        </div>

        <div className="title">Bài 2: Ứng dụng danh sách sinh viên</div>
        <div className="desc">
            - Sinh viên sử dụng axios để lấy dữ liệu danh sách sinh viên qua địa chỉ https://jsonplaceholder.typicode.com/users
        </div>
        <div className="desc">
            - Hiển thị danh sách sinh viên gồm các thông tin (Họ tên, email)
        </div>
        <div className="desc">
            - Khi click vào 1 sinh viên thì hiển thị chi tiết (dùng React Router).
        </div>

        <div className="title">Bài 3: Ứng dụng xem tin tức</div>
        <div className="desc">
            - Sinh viên sử dụng axios để lấy dữ liệu tin tức qua địa chỉ https://api.spaceflightnewsapi.net/v4/articles?limit=10
        </div>
        <div className="desc">
            - Hiển thị danh sách tin tức gồm các thông tin (Ảnh, tiêu đề, mô tả, link tin gốc, ngày đăng)
        </div>
        <div className="desc">
            <strong>Yêu cầu:</strong> Toàn bộ bài sử dụng typescript, bắt buộc sử dụng các thư viện: axios, react-router-dom, cả 3 bài trong cùng 1 project, mỗi bài là một component
        </div>
        
    </S.Container>
);

export default Home;
