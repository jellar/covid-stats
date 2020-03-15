import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "../components/Stats";

export const CountySelector = () => {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );

  const [selectedCountry, setSelectedCountry] = useState("GBR");
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Currently showing {selectedCountry}</h2>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            key={code}
            selected={selectedCountry === countries.iso3[code]}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
};
