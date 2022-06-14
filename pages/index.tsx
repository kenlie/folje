import styled from "@emotion/styled";
import Layout from "../src/components/Layout";
import DogeMan from "../src/components/svg-animations/doge-man";
import DrunkMan from "../src/components/svg-animations/drunk-man";
import { HomeGirl } from "../src/components/svg-animations/home-girl";
import { HomeMan } from "../src/components/svg-animations/home-man";
import RobotMerchant from "../src/components/svg-animations/robot-merchant";
import * as color from "@mui/material/colors";
import React from "react";
import { darken } from "@mui/material";
const SVGContainer = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  margin: 32px 0;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BOX_SIZE = 20;
const ColorPickerRow = styled(Row)`
  width: 100%;
  max-width: ${4 * BOX_SIZE}px;
  &:hover {
    max-width: ${4 * BOX_SIZE}px;
    cursor: pointer;
  }
`;
const ColorPickerItem = styled.div<{ backgroundColor: string }>`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-color: ${(props) => props.backgroundColor};
`;

const ColorPicker: React.FC<{
  color: any;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
}> = ({ color, setCurrentColor }) => {
  return (
    <ColorPickerRow>
      {Object.keys(color).map((c) => (
        <ColorPickerItem
          backgroundColor={color[c][500]}
          key={c}
          onClick={() => setCurrentColor(color[c][500])}
        />
      ))}
    </ColorPickerRow>
  );
};

const IndexPage = () => {
  const [currentColor, setCurrentColor] = React.useState(
    color.purple[500] as string
  );
  const colors = {
    main: currentColor,
  };
  const handleSetCurrentColor = (color: string) => {
    setCurrentColor(color);
  };
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 style={{ color: darken(currentColor, 0.4) }}>Title</h1>
      <h2 style={{ color: darken(currentColor, 0.2) }}>Gen 1</h2>
      <Row>
        <SVGContainer>
          <HomeGirl colors={colors} />
        </SVGContainer>
        <SVGContainer>
          <HomeMan colors={colors} />
        </SVGContainer>
      </Row>
      <h2 style={{ color: darken(currentColor, 0.2) }}>Gen 2</h2>
      <Row>
        <SVGContainer>
          <DogeMan colors={colors} />
        </SVGContainer>
        <SVGContainer>
          <DrunkMan style={{}} colors={colors} />
        </SVGContainer>
        <SVGContainer>
          <RobotMerchant colors={colors} />
        </SVGContainer>
      </Row>
      <div
        aria-label="add"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <ColorPicker color={color} setCurrentColor={handleSetCurrentColor} />
      </div>
    </Layout>
  );
};

export default IndexPage;
