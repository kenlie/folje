import {
  Environment,
  Sky,
  useGLTF,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
const coin2 = "person.glb";

const Model: React.FC<{ animation: string }> = ({ animation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(`/${coin2}`);
  const { actions } = useAnimations(animations, group); /* highlight-line */
  console.log(actions);
  React.useEffect(() => {
    /* highlight-line */
    // actions["idle"].play(); /* highlight-line */
    actions["run"].stop();
    actions["idle"].stop();
    actions[animation].play(); /* highlight-line */
  }, [animation]);
  return (
    <>
      <group ref={group}>
        <primitive object={scene} scale={25} />;
      </group>
    </>
  );
};

type Preset =
  | "apartment"
  | "sunset"
  | "dawn"
  | "night"
  | "warehouse"
  | "forest"
  | "studio"
  | "city"
  | "park"
  | "lobby";
const CoinModel: React.FC = () => {
  const [preset, setPreset] = React.useState<Preset>("dawn");
  const [intensity, setIntensity] = React.useState(10);
  const [animation, setAnimation] = React.useState("run");
  const [x, setX] = React.useState(10);
  const [y, setY] = React.useState(10);
  const [z, setZ] = React.useState(10);
  const presetList = [
    "apartment",
    "sunset",
    "dawn",
    "night",
    "warehouse",
    "forest",
    "studio",
    "city",
    "park",
    "lobby",
  ];
  const handleChange = (event, newValue) => {
    setX(newValue);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button onClick={() => setAnimation("idle")}>Idle</button>{" "}
      <button onClick={() => setAnimation("run")}>Run</button>{" "}
      <Canvas camera={{ position: [0, 0, 400], fov: 75 }}>
        <ambientLight intensity={0.1} />
        {/* <directionalLight intensity={0.1} position={[15, 0, -50]} />
        <pointLight intensity={10} position={[10, 0, -5]} />
        <pointLight intensity={intensity} position={[x, y, z]} /> */}
        <OrbitControls />
        <Suspense
          fallback={
            <mesh>
              <boxBufferGeometry args={[1, 1, 1]} />
              <meshStandardMaterial />
            </mesh>
          }
        >
          {/**
             * 
             <Environment files={'/models/snowy_field_4k.hdr'} background />
            */}
          <Environment preset={preset} background={false} />
          <Model animation={animation} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default CoinModel;
