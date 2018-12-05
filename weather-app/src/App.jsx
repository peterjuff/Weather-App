import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const api_key = "864947243d45aa34cc4f1c4c78491a1b";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${api_key}`
    );

    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        {" "}
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
