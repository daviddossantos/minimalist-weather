import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from "react-native";
import { API_KEY } from "./src/utils/WeatherAPIKey";
import * as Location from "expo-location";
import Weather from "./src/components/Weather";
import axios from "axios";
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  async function fetchWeather(latitude, longitude) {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    const json = response.data;
    setWeatherCondition(json.weather[0].main);
    setTemperature(json.main.temp);
    setCity(json.name);
    setCountry(json.sys.country);
    setLoading(false);
  }

  useEffect(() => {
    const loadingWeather = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Ops!",
          "Precisamos de sua permissão para obeter a localização"
        );

        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      fetchWeather("-23.6738", "-46.7474");
    };
    loadingWeather();
  });

  async function handleUpdateWeather() {
    setLoading(true);
    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    fetchWeather("-23.6738", "-46.7474");
  }

  const buttonUpdate = (
    <TouchableHighlight
      style={styles.button}
      onPress={handleUpdateWeather}
      underlayColor="rgba(255, 255, 255, 0.2)"
    >
      <Text style={styles.textButton}>Atualizar</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Buscando tempo...</Text>
        </View>
      ) : (
        <Weather
          weather={weatherCondition}
          temperature={temperature}
          city={city}
          country={country}
          buttonUpdate={buttonUpdate}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#298",
  },
  loadingText: {
    fontSize: 30,
    color: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: { color: "#fff", fontSize: 13 },
});
