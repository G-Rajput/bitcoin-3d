import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { PointsMaterial } from 'three';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => {
      const data = new Float32Array(5000);
      random.inSphere(data, { radius: 2 });
      // Check for NaN values in data
      for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
          console.error('NaN found in position data at index:', i);
        }
      }
      return data;
    });
  
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
  
    return (
      <group rotation={[0, Math.PI / 2, 0]}>
        <Points ref={ref} positions={sphere} frustumCulled {...props}>
          <pointsMaterial
            size={0.008}
            sizeAttenuation={true}
            depthWrite={false}
            color="#FFD700" // Directly use color property
          />
        </Points>
      </group>
    );
  };
  

const StarsCanvas = () => {
  return (
    <div className='stars'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
