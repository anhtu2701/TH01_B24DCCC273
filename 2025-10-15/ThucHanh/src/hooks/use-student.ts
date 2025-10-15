import { useQuery } from "@tanstack/react-query";
import { getDataStudent, getDataStudentDetail } from "../api";
import type { DataStudent } from "../interfaces";

export const useListStudent = () =>
    useQuery<DataStudent[], Error>({
        queryKey: ["students"],
        queryFn: async () => await getDataStudent<DataStudent[]>(),
    });

export const useStudentDetail = (id: number) =>
    useQuery<DataStudent, Error>({
        queryKey: ["student", id],
        queryFn: async () => await getDataStudentDetail<DataStudent>(id),
        enabled: !!id,
    });
