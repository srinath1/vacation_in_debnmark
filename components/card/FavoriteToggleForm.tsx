"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toogleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

const FavoriteToggleForm = ({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();
  const toggleAction = toogleFavoriteAction.bind(null, {
    pathname,
    propertyId,
    favoriteId,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
