import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/UserProfileForm";
import React from "react";

function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    return <div>Unable to load user profile</div>;
  }
  return (
    <div>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </div>
  );
}

export default UserProfilePage;
