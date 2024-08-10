import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const color = new THREE.Color();

// const Earth = () => {
//   const earth = useGLTF("/marble_bitcoin.glb");
//   console.log("Earth",earth)

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

export default function Model({ scroll, ...props }) { 
  const group = useRef();
  const { animations } = useGLTF('/model.glb');
  const { nodes, materials } = useGLTF('/bitcoin.glb');
  const material = materials['Scene_-_Root'];
  const { actions } = useAnimations(animations, group);
  const [hovered, set] = useState();
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 };

  useEffect(() => void (actions["CameraAction.005"].play().paused = true), []);
  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("#E5B80B");
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05);

    // Make the group (containing the coin) rotate around the y-axis
    const et = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = et * 0.5; // Adjust the speed of rotation by changing the multiplier
    }

    // Rotate the mesh with index 0 around y-axis
    const mesh = group.current?.children[0]?.children.find(child => child.type === 'Mesh');
    if (mesh) {
      mesh.rotation.y = et * 0.5; // Rotate the mesh around the y-axis
    }

    group.current.children[0].children.forEach((child, index) => {
      child.material.color.lerp(color.set(hovered === child.name ? "#d4af37" : "#E5B80B"), hovered ? 0.1 : 0.05);
      child.position.y = Math.sin((et + index * 2000) / 2) * 1;
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 10;
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 10;
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 10;
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}
        position={[1.06, 4.04, 10.35]}
        scale={[0.1, 0.1, 0.1]} rotation={[0,-Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cylinder002__0.geometry} material={material} />
      </group>
      <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
          <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
    </group>
  );
}

useGLTF.preload('/model.glb');
