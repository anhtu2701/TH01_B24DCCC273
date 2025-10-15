import { useQuery } from "@tanstack/react-query"
import { getDataCity } from "../api"
import type { WeatherData } from "../interfaces"

export const useCity = (city: string) => useQuery<WeatherData, Error>({
    queryKey: ['city', city],
    queryFn: async () => await getDataCity<WeatherData>(city),
    enabled: !!city
})