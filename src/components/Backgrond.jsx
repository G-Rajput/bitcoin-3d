import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef();
  const linesRef = useRef();

  // Rotate globe and lines based on mouse movement
  useFrame((state) => {
    const { x, y } = state.mouse;
    globeRef.current.rotation.y = x * 0.5;
    globeRef.current.rotation.x = -y * 0.5;
    linesRef.current.rotation.y = x * 0.5;
    linesRef.current.rotation.x = -y * 0.5;
  });

  return (
    <>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color='#87CEEB' wireframe />
      </mesh>
      <lineSegments ref={linesRef}>
        <edgesGeometry attach="geometry" args={[new THREE.SphereGeometry(1.2, 24, 24)]} />
        <lineBasicMaterial attach="material" color="#6495ED" />
      </lineSegments>
    </>
  );
}

function BackgroundScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Globe />
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default function App() {
  return <BackgroundScene />;
}
