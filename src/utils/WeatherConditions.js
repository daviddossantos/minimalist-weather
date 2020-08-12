import rainy from "../../assets/lottie/rainy.json";
import sunny from "../../assets/lottie/sunny.json";
import snow from "../../assets/lottie/snow.json";
import storm from "../../assets/lottie/storm.json";
import mist from "../../assets/lottie/mist.json";
import cloudy from "../../assets/lottie/cloudy.json";
import hail from "../../assets/lottie/hail.json";

export const weatherConditions = {
  Rain: {
    color: "#005BEA",
    title: "Chovendo",
    subtitle: "Tome uma xícara de café",
    icon: rainy,
  },
  Clear: {
    color: "#f7b733",
    title: "Ensolarado",
    subtitle: "Passe um protetor solar",
    icon: sunny,
  },
  Thunderstorm: {
    color: "#616161",
    title: "Tempestade",
    subtitle: "Fique em um lugar seguro",
    icon: storm,
  },
  Clouds: {
    color: "#1F1C2C",
    title: "Nuvens",
    subtitle: "Em toda parte",
    icon: cloudy,
  },

  Snow: {
    color: "#00d2ff",
    title: "Neve",
    subtitle: "Saia e construa um boneco de neve",
    icon: snow,
  },
  Drizzle: {
    color: "#076585",
    title: "Chuvisco",
    subtitle: "Chovendo parcialmente...",
    icon: hail,
  },
  Haze: {
    color: "#66A6FF",
    title: "Neblina",
    subtitle: "Cuidado ao andar na rua",
    icon: hail,
  },
  Mist: {
    color: "#3CD3AD",
    title: "Névoa",
    subtitle: "Cuidado ao andar na rua",
    icon: mist,
  },
};
