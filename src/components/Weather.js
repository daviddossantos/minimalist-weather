import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { weatherConditions } from "../utils/WeatherConditions";
import LottieView from "lottie-react-native";

const Weather = ({ weather, temperature, city, country, buttonUpdate }) => {
  if (weather != null) {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weather].color },
        ]}
      >
        <View style={styles.headerContainer}>
          <LottieView
            source={weatherConditions[weather].icon}
            style={{ width: 90, height: 90 }}
            autoPlay
            loop
            speed={2}
          />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.info}>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.city}>{city}</Text>
          </View>
          {buttonUpdate}
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[weather].subtitle}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh não, algo deu errado</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tempText: {
    fontSize: 72,
    color: "#fff",
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",

    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
  },

  sectionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    margin: 20,
  },
  country: {
    fontSize: 60,
    color: "#fff",
  },
  city: {
    fontSize: 24,
    color: "#fff",
  },
  info: { alignItems: "center", justifyContent: "center" },
});

export default Weather;
