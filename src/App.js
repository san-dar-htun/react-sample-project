import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [country, setCountry] = useState("Mandalay");
  const [data, setData] = useState({});
  const fetchWeather = async (country_name = country) => {
    if (country_name !== undefined) {
      try {
        const response = await api.get(
          `weather?q=${country_name}&appid=${api_key}`
        );
        setData(response.data);
        setCountry(country);
      } catch (error) {
        alert("Weather Information can't get for your city!!!!");
      }
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
        <div className="shadow-large bg-light gap-4">
          <h2 className="text-center mt-4">Weather App</h2>
          <Form fetchWeather={fetchWeather} />
          <Card data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
