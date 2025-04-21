import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallbackPage() {
  const { user } = useAuth0();
  //   console.log("====================================");
  //   console.log("user", user);
  //   console.log("====================================");
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const handleUserCreation = async () => {
      if (user?.sub && user?.email && !hasCreatedUser.current) {
        console.log(" Auth0 user:", user);
        const newUser = {
          auth0Id: user.sub,
          email: user.email,
        };
        console.log("Payload for createUser:", newUser);
        await createUser(newUser);
        hasCreatedUser.current = true;
        navigate("/");
      }
    };

    handleUserCreation();
  }, [createUser, navigate, user]);

  return <div>LOADING....</div>;
}

export default AuthCallbackPage;
