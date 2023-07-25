import Feels from "./icons/Feels";
import Humidity from "./icons/Humidity";
import Pop from "./icons/Pop";
import Pressure from "./icons/Pressure";
import Visibility from "./icons/Visibility";
import Wind from "./icons/Wind";

type props = {
    icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
    title: string;
    info: string | JSX.Element;
    description: string;
};

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
};

export const WeatherCard = ({ icon, title, info, description }: props) => {
    const Icon = icons[icon];
    return (
        <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
            <Icon />
            <div className="flex items-center text-sm font-bold">
                <h4 className="ml-1">{title}</h4>
            </div>
            <h3 className="mt-2 text-lg">{info}</h3>
            <p className="text-xs font-bold">{description}</p>
        </article>
    );
};
