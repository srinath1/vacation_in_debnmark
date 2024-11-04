import React from "react";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import SubmitButton from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/categoriesInput";
import TextAreaInput from "@/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";
import CounterInput from "@/components/form/CounterInput";
import AmenetiesInput from "@/components/form/AmenetiesInput";

const CreatePropertyPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Property
      </h1>
      <div className=" border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name(Max 20 Characters Limit)"
              defaultValue="Cabin In Denmark"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline(Max 30 Characters Limit)"
              defaultValue="Breakaway the stress in Esberg Denmark"
            />
          </div>
          <PriceInput />
          <CategoriesInput />
          <TextAreaInput
            name="description"
            labelText="Description(1-1000 words)`"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accomodation Details
          </h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="baths" />
          <h3 className="text-lg mt-10 mb-6 font-medium">Ameneties</h3>
          <AmenetiesInput />

          <SubmitButton text="Create Rental" className="ml-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreatePropertyPage;
