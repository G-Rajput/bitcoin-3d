import { Canvas } from '@react-three/fiber'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import React from 'react'
import Coin from './Coin'
import { Environment, OrbitControls } from '@react-three/drei'
gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = () => {
  console.log("hello")
  return (
    <Canvas camera={{position:[0,4,1]}}>
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} />
        <OrbitControls enableZoom={false}/>
        <Coin />
        <Environment preset='studio' />
    </Canvas>
  )
}

export default CanvasContainer