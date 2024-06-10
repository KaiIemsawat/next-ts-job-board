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
      <>
        <Input
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          {...props}
          ref={ref}
        />
      </>
    );
  },
);
export default LocationInput;
