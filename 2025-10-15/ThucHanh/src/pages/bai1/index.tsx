import { useState } from "react";
import { useCity } from "../../hooks/use-city";
import * as S from "./index.styles";

const Bai1 = () => {
    const [searchCity, setSearchCity] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const { data: weather, isLoading: loading, error } = useCity(searchCity);

    const handleSearch = async () => {
        if (!city.trim()) {
            return;
        }

        setSearchCity(city);
    };

    return (
        <S.Container>
            <div className="title">Ứng dụng Thời tiết</div>

            <div className="group">
                <S.Input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Nhập tên thành phố"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <S.Button onClick={handleSearch} disabled={loading}>
                    {loading ? "Đang tải..." : "Tìm kiếm"}
                </S.Button>
            </div>

            {error && (
                <div className="error">
                    {error.message || "Đã có lỗi xảy ra. Vui lòng thử lại."}
                </div>
            )}

            {weather && weather.current_condition && (
                <div className="weather-info">
                    <div className="info-item">
                        <p>
                            <strong>Nhiệt độ:</strong>
                            {weather.current_condition[0].temp_C}°C
                        </p>
                        <p>
                            <strong>Tình trạng:</strong>
                            {weather.current_condition[0].weatherDesc[0].value}
                        </p>
                    </div>
                </div>
            )}
        </S.Container>
    );
};

export default Bai1;
