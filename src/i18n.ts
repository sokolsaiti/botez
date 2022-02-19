import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  sq: {
    translation: {
      placeholder: "Shteti, territori...",
      guess: "Qëllo",
      share: "Ndaj",
      showOnGoogleMaps: "👀 në Google Maps",
      welldone: "Bravo!",
      unknownCountry: "Shtet i panjohur!",
      copy: "Rezultatet u kopjuan",
      showCountry: "🗺️ Trego hartën!",
      cancelRotation: "🌀 Anulo rrotullimin",
      settings: {
        title: "Settings",
        distanceUnit: "Njësia e largësisë",
        theme: "Theme",
        difficultyModifiers: "Modifikim i vështirësive",
        startingNextDay: "Fillon ditën e ardhshme!",
        noImageMode: "Fsheh foton e shtetin për të sfiduar më shumë.",
        rotationMode: "Rrotullo foton e shtetit.",
      },
      stats: {
        title: "Statistikat",
        played: "Luajtur",
        win: "Fituar %",
        currentStreak: "Seria e Tashme e fitoreve",
        maxStreak: "Seria Maksimale e fitoreve",
        averageBestDistance: "Distanca mesatare më e mirë",
        guessDistributions: "Shpërndarja e fitoreve",
      },
      buyMeACoffee: "Blejani ni ☕ ktij djalit!",
    },
  },
  en: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide country image for more of a challenge.",
        rotationMode: "Randomly rotate country image.",
      },
      buyMeACoffee: "Buy me a ☕!",
    },
  },
  fr: {
    translation: {
      placeholder: "Pays, territoires...",
      guess: "Deviner",
      share: "Partager",
      showOnGoogleMaps: "👀 sur Google Maps",
      welldone: "Bien joué !",
      unknownCountry: "Pays inconnu !",
      copy: "Résultat copié !",
      showCountry: "🗺️ Afficher la carte !",
      cancelRotation: "🌀 Annule la rotation",
      settings: {
        title: "Paramètres",
        distanceUnit: "Unité de distance",
        theme: "Thème",
        difficultyModifiers: "Modificateurs de difficulté",
        startingNextDay: "A partir du lendemain !",
        noImageMode: "Cache l'image du pays pour plus de challenge.",
        rotationMode: "Tourne l'image du pays de manière aléatoire.",
      },
      buyMeACoffee: "Offrez moi un ☕ !",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "sq",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
