import sunny from "./images/sunny.png";
import cloudly from "./images/cloudly.png";
import raining from "./images/raining2.png";

const weather = [
  {
    id: 1,
    day: "Mon",
    fullday: "Monday",
    logo: sunny,
    text: "Sunny",
    minTemp: 9,
    maxTemp: 15,
    precipitation: "20%",
    humidity: "41%",
    wind: "24 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 2,
    day: "Tue",
    fullday: "Tuesday",
    logo: cloudly,
    text: "Mostly Cloudy",
    minTemp: 8,
    maxTemp: 11,
    precipitation: "25%",
    humidity: "45%",
    wind: "40 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 3,
    day: "Wed",
    fullday: "Wednesday",
    logo: cloudly,
    text: "Mostly Cloudy",
    minTemp: 5,
    maxTemp: 9,
    precipitation: "18%",
    humidity: "35%",
    wind: "40 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 4,
    day: "Thu",
    fullday: "Thursday",
    logo: raining,
    text: "Scattered Showers",
    minTemp: 3,
    maxTemp: 8,
    precipitation: "30%",
    humidity: "38%",
    wind: "35 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 5,
    day: "Fri",
    fullday: "Friday",
    logo: raining,
    text: "Scattered Showers",
    minTemp: 5,
    maxTemp: 9,
    precipitation: "19%",
    humidity: "30%",
    wind: "56 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 6,
    day: "Sat",
    fullday: "Saturday",
    logo: sunny,
    text: "Sunny",
    minTemp: 8,
    maxTemp: 12,
    precipitation: "30%",
    humidity: "55%",
    wind: "35 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  },
  {
    id: 7,
    day: "Sun",
    fullday: "Sunday",
    logo: sunny,
    text: "Sunny",
    minTemp: 10,
    maxTemp: 14,
    precipitation: "20%",
    humidity: "87%",
    wind: "45 km/h",
    detailTemp: {
      first: "9",
      second: "12",
      third: "15",
      fourth: "14"
    }
  }
];

export function getWeather() {
  return weather;
}
