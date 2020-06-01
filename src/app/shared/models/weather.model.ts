export interface CityWeather {
  city: City;
  weather: Weather;
}

export interface CityDailyWeather {
  city: City;
  current: Weather;
  daily: DailyWeather[];
}

export interface City {
  id: number;
  name: string;
  country: string;
  coord: Coord;
  timeZone: string;
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  humidity: number;
  wind: Wind;
  sunrise: number;
  sunset: number;
}

export interface DailyWeather {
  date: number;
  weather: Weather;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Wind {
  speed: number;
  deg: number;
}
