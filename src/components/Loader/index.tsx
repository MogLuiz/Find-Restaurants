// Packages
import React from "react";
import Lottie from "react-lottie";

// Assets
import animationData from "../../assets/restaurants-loading.json";

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};
