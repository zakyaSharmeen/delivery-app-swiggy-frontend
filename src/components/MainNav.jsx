import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameButton from "./UsernameButton";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <span>
        {isAuthenticated ? (
          <UsernameButton />
        ) : (
          <Button
            variant="ghost"
            className="font-bold hover:text-orange-500 hover:bg-white"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </span>
      {/* <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button> */}
    </>
  );
};

export default LoginButton;
