import React from "react";
import { Btn } from "../components/atoms/Btn/Btn";

export const HomePage = () => {
  return (
    <div>
      <Btn bgColor="blue" color="white" text="Button" />
      <Btn
        padding="20px"
        bgColor="green"
        color="white"
        fontSize="18px"
        fontWeight="bold"
        text="Click Me"
      />
    </div>
  );
};
