import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";

import citiesList from "@/lib/cities-list";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (loction: string) => void;
}

const LocationInput = forwardRef<HTMLInputElement, LocationInputProps>(
  ({ onLocationSelected, ...props }, ref) => {
    const [locationSearchInput, setLocationSearchInput] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const cities = useMemo(() => {
      if (!locationSearchInput.trim()) {
        return [];
      }

      const searchWords = locationSearchInput.split(" ");

      return citiesList
        .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [locationSearchInput]);

    return (
      <div className="relative">
        <Input
          placeholder="Search for a city"
          type="search"
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...props}
          ref={ref}
        />
        {locationSearchInput.trim() &&
          isFocus && ( // display only when focus
            <div className="absolute z-20 divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
              {!cities.length && <p className="p-3">No results found</p>}
              {cities.map((city) => (
                <button key={city} className="block w-full p-2 text-start">
                  {city}
                </button>
              ))}
            </div>
          )}
      </div>
    );
  },
);
export default LocationInput;
