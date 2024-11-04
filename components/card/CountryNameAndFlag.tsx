import { findCountryByCode } from "@/utils/countries";
import React from "react";
import Flag from "react-world-flags";

const CountryNameAndFlag = ({ countryCode }: { countryCode: string }) => {
  const validCountry = findCountryByCode(countryCode)!;
  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      <Flag code={validCountry.code} style={{ width: 20, height: 20 }} />
      {countryName}
    </span>
  );
};

export default CountryNameAndFlag;
