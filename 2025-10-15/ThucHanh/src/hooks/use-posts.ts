import { useQuery } from "@tanstack/react-query";
import { getDataPosts } from "../api";
import type { DataPostResponse } from "../interfaces";

export const usePosts = () =>
    useQuery<DataPostResponse, Error>({
        queryKey: ["post"],
        queryFn: async () => await getDataPosts<DataPostResponse>(),
    });
