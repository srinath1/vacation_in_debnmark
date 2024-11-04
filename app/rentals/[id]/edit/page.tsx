import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import CountriesInput from "@/components/form/CountriesInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenetiesInput";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/form/Buttons";
import TextAreaInput from "@/TextAreaInput";
import CategoriesInput from "@/components/form/categoriesInput";

import { Amenity } from "@/utils/ameneties";
import ImageInputContainer from "@/components/form/ImageInputContainer";

import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const property = await fetchRentalDetails(params.id);
  if (!property) redirect("/");

  const defaultAmeneties: Amenity[] = JSON.parse(property.amenities);
  return (
    <section className="text-2xl font-semibold mb-8 capitalize">
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (20 limit)"
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description(10-100 words)"
            defaultValue={property.description}
          />
          <h3 className="text-lg mt-8 font-medium">Accomodation Details</h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />

          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="baths" defaultValue={property.baths} />
          <h3 className=" text-lg mt-10 mb-6 font-medium">Ameneties</h3>
          <AmenitiesInput defaultValue={defaultAmeneties} />
          <SubmitButton text="edit property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default page;
