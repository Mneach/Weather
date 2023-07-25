import { ChangeEvent, useState, useEffect } from "react";
import { forecastType, optionType } from "../types";

export const useForecast = () => {
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>();

    const getSearchOptions = (value: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value},&limit=5&appid=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        )
            .then((result) => result.json())
            .then((data) => setOptions(data));
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setTerm(value);

        if (value === "") return;

        getSearchOptions(value);
    };

    const getForecast = (city: optionType) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${
                city.lat
            }&lon=${city.lon}&units=metric&appid=${
                import.meta.env.VITE_REACT_APP_API_KEY
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const forecast = {
                    ...data.city,
                    list: data.list.slice(0, 16),
                };

                setForecast(forecast);
            });
    };

    const onSubmit = () => {
        if (!city) return;

        getForecast(city);
    };

    const onOptionSelect = (option: optionType) => {
        setCity(option);
    };

    useEffect(() => {
        if (city) {
            setTerm(city.name);
            setOptions([]);
        }
    }, [city]);

    return {
        term,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        onSubmit,
    };
};
