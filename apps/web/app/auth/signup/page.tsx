import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center 2xl font-bold mb-4">Sign In Page</h1>
      <div className="flex justify-between text-sm">
        <p>already have an account?</p>
        <Link className="underline" href={"/auth/signin"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
