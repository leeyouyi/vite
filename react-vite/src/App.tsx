import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./three/Box";

function App() {
  const [count, setCount] = useState(0);

  // const handleMouseMove =
  //   () => (e: React.MouseEventHandler<HTMLDivElement> | undefined) => {
  //     console.log(e);
  //     const mousePoint = document.querySelector("mousePoint") as HTMLElement;
  //     console.log(mousePoint);
  //   };

  // useEffect(() => {
  //   const body = document.querySelector("body") as HTMLElement;
  //   body.addEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <>
      {/* <div
        id="mousePoint"
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          background: "#ff0",
        }}
      ></div> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Canvas
        camera={{
          near: 1,
          far: 1000,
          zoom: 1,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#252934");
        }}
      >
        <ambientLight />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <gridHelper />
        <axesHelper />
        <pointLight intensity={1.0} position={[5, 3, 5]} />
        <Box position={[-1.2, 0, 0]} scale={100} />
        {/* <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </>
  );
}

export default App;
