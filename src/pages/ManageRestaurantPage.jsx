import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import React from "react";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;
  return (
    <div>
      <ManageRestaurantForm
        restaurant={restaurant}
        onSave={isEditing ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </div>
  );
}

export default ManageRestaurantPage;
