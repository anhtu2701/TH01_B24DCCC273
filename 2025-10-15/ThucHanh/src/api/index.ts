import axiosInstance from '../services/axios';

export const getDataCity = <T = any>(city: string): Promise<T> => {
    return axiosInstance.get(`https://wttr.in/${city}?format=j1`);
};

export const getDataStudent = <T = any>(): Promise<T> => {
    return axiosInstance.get('https://jsonplaceholder.typicode.com/users');
};

export const getDataStudentDetail = <T = any>(id: number): Promise<T> => {
    return axiosInstance.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const getDataPosts = <T = any>(): Promise<T> => {
    return axiosInstance.get('https://api.spaceflightnewsapi.net/v4/articles?limit=10');
}
