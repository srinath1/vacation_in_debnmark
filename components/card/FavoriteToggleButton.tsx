import React from "react";
import { auth } from "@clerk/nextjs/server";
import { CardSignButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();
  if (!userId) return <CardSignButton />;
  const favoriteId = await fetchFavoriteId({ propertyId });
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteToggleButton;
