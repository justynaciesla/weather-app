import React, { Component } from "react";
import WeatherCards from "./components/weatherCards";
import WelcomeOrDetails from "./components/welcomeOrDetails";
import { getWeather } from "./weatherService";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = {
    weather: [],
    detailedWeather: []
  };

  componentDidMount() {
    const weather = getWeather();
    this.setState({ weather });
  }

  showDetails = weather => {
    const details = this.state.weather.filter(w => w.id === weather.id);
    const detailedWeather = details[0];
    this.setState({ detailedWeather });
  };

  render() {
    return (
      <div>
        <WelcomeOrDetails details={this.state.detailedWeather} />
        <WeatherCards
          weather={this.state.weather}
          details={this.state.detailedWeather}
          showDetails={this.showDetails}
        />
      </div>
    );
  }
}

export default App;
