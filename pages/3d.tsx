import Layout from "../src/components/Layout";
import React from "react";
import dynamic from "next/dynamic";
const CoinModel = dynamic(() => import("../src/components/3d"), {
  ssr: false,
});
const ThreePage = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ marginTop: 32 }}>
          <h1>Things I like to do</h1>
        </div>
        <CoinModel />
      </div>
    </div>
  );
};

export default ThreePage;
