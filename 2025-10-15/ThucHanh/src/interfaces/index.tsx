export interface WeatherData {
    current_condition: Array<{
        temp_C: string;
        weatherDesc: Array<{
            value: string;
        }>;
    }>;
}

export interface DataStudent {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string
}

export interface DataPostResponse {
    results: DataPost[]
}

export interface DataPost {
    id: number,
    title: string,
    url: string,
    image_url: string,
    summary: string,
    published_at: string,
    news_site: string
}