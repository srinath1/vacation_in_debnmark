import { fetchPropertyDetails, findExistingReview } from "@/utils/actions";
import React from "react";
import { redirect } from "next/navigation";
import Breadcrumbs from "@/components/properties/Breadcrumbs";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import ShareButton from "@/components/properties/ShareButton";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyRating from "@/components/card/PropertRating";
import PropertyDeatils from "@/components/properties/PropertyDeatils";
import UserInfo from "@/components/properties/userInfo";
import { Separator } from "@/components/ui/separator";
import Description from "@/components/properties/Description";
import Ameneties from "@/components/properties/Ameneties";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import SubmitReview from "@/components/reviews/SubmitReview";
import PropertyReviews from "@/components/reviews/PropertyReviews";
import { auth } from "@clerk/nextjs/server";

const DynamicMap = dynamic(
  () => import("@/components/properties/Propertymap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

const DynamicBookingWrapper = dynamic(
  () => import("@/components/booking/BookingWrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);
const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");
  const { baths, bedrooms, guests, beds } = property;
  const details = { baths, bedrooms, guests, beds };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;
  const { userId } = auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesntExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  return (
    <section>
      <Breadcrumbs name={property.name} />
      <header className="flex justify-between items-center  mt-4">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className=" flex items-center  gap-x-4">
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDeatils details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Ameneties amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          {/* calendar */}
          <DynamicBookingWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.bookings}
          />
        </div>
      </section>
      {reviewDoesntExist && <SubmitReview propertyId={property.id} />}

      <PropertyReviews propertyId={property.id} />
    </section>
  );
};

export default PropertyDetailsPage;
