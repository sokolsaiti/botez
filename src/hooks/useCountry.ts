import { useMemo } from "react";
import seedrandom from "seedrandom";
import { countriesWithImage, Country } from "../domain/countries";

const forcedCountries: Record<string, string> = {
  "2022-02-02": "TD",
  "2022-02-03": "PY",
  "2022-03-26": "AL",
  "2022-04-01": "RS",
  "2022-04-02": "XK",
  "2022-04-04": "FO",
  "2022-04-23": "YE",
};

export function useCountry(dayString: string): [Country, number, number] {
  const country = useMemo(() => {
    const forcedCountryCode = forcedCountries[dayString];
    const forcedCountry =
      forcedCountryCode != null
        ? countriesWithImage.find(
            (country) => country.code === forcedCountryCode
          )
        : undefined;

    return (
      forcedCountry ??
      countriesWithImage[
        Math.floor(seedrandom.alea(dayString)() * countriesWithImage.length)
      ]
    );
  }, [dayString]);

  const randomAngle = useMemo(
    () => seedrandom.alea(dayString)() * 360,
    [dayString]
  );

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [country, randomAngle, imageScale];
}
