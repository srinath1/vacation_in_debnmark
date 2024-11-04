import { Amenity } from "@/utils/ameneties";
import { LuFolderCheck } from "react-icons/lu";
import Title from "./Title";

import React from "react";

const Ameneties = ({ amenities }: { amenities: string }) => {
  const amenetiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmeneties = amenetiesList.every((amenity) => !amenity.selected);

  if (noAmeneties) {
    return null;
  }
  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenetiesList.map((amenity) => {
          if (!amenity.selected) {
            return null;
          }
          return (
            <div key={amenity.name} className="flex items-center gap-x-4 mb-2 ">
              <LuFolderCheck className="h-6 w-6 text-primary" />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ameneties;
