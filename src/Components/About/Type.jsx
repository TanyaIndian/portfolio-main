import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Frontend Developer", "Mentor at Masai School", "Exploring New Places"],
          autoStart: true,
          loop: true,
          deleteSpeed: 40
        }}
      />
    </>
  );
};