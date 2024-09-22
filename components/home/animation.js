import dynamic from "next/dynamic";
import React from "react";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

// import Lottie from "react-lottie-player";

// const NewsItem = dynamic(() => import("/components/home/animation.js"), {
//   ssr: false,
// });

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/animation.json";

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
