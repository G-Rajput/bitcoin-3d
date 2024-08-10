// App.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Function to create a circular point geometry
function createBitcoinGeometry() {
  const geometry = new THREE.CircleGeometry(1, 128);
  const positions = geometry.attributes.position.array;
  const colors = new Float32Array(positions.length);

  for (let i = 0; i < positions.length; i++) {
    colors[i] = Math.random();
  }

  return { positions, colors };
}

// Points component for the Bitcoin model
const CoinModel = () => {
  const ref = useRef();
  const { positions, colors } = createBitcoinGeometry();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial size={0.01} vertexColors />
    </Points>
  );
};
export default CoinModel

// const App = () => {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//       <ambientLight intensity={0.5} />
//       <BitcoinPoints />
//     </Canvas>
//   );
// };

