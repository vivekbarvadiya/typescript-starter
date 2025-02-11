import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthNext = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              signIn("google");
            }}
          >
            Sign in with google
          </button>
        </>
      )}
    </>
  );
};

export default AuthNext;
