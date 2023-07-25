import "./App.css";
import { Search } from "./components/search";
import { useForecast } from "./hooks/useForecast";
import { Forecast } from "./components/Forecast";

function App() {
    const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
        useForecast();

    return (
        <main className="w-full min-h-screen flex justify-center items-center bg-blue-400">
            {forecast ? (
                <Forecast data={forecast} />
            ) : (
                <Search
                    term={term}
                    options={options}
                    onInputChange={onInputChange}
                    onOptionSelect={onOptionSelect}
                    onSubmit={onSubmit}
                />
            )}
        </main>
    );
}

export default App;
