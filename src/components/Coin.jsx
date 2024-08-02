import { useGLTF } from '@react-three/drei'
import React, { useLayoutEffect } from 'react'
import { useThree } from "@react-three/fiber";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Coin = () => {
    const {nodes,materials} = useGLTF('/bitcoin.glb')
    const material = materials['Scene_-_Root'];
    const { scene, camera } = useThree();
    const tl = gsap.timeline();

    console.log(nodes)

    
    // useLayoutEffect(() => {
    //   new ScrollTrigger({});
    //   // component About.tsx
    //   tl.to(camera.position, {
    //     x: 5,
    //     y: 4.0,
    //     z: 2.8,
    //     scrollTrigger: {
    //       trigger: ".second-section",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //     },
    //   })
    //     .to(scene.position, {
    //       x: 3.01,
    //       y: 0.76,
    //       z: 3.7,
    //       scrollTrigger: {
    //         trigger: ".second-section",
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true,
    //         immediateRender: false,
    //       },
    //     })
  
    //     .to(scene.rotation, {
    //       x: -0.53,
    //       y: -3.48,
    //       z: -0.21,
    //       scrollTrigger: {
    //         trigger: ".second-section",
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true,
    //         immediateRender: false,
    //       },
    //     })
  
    //     // component - BuyNow.tsx
    //     .to(camera.position, {
    //       x: 5,
    //       y: 3.8,
    //       z: 2.8,
    //       scrollTrigger: {
    //         trigger: ".third-section",
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true,
    //         immediateRender: false,
    //       },
    //     })
    //     .to(scene.position, {
    //       x: 2.31,
    //       y: 0.01,
    //       z: -0.7,
    //       scrollTrigger: {
    //         trigger: ".third-section",
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true,
    //         immediateRender: false,
    //       },
    //     })
    //     .to(scene.rotation, {
    //       x: 0.67,
    //       y: -12.9,
    //       z: 0.79,
    //       scrollTrigger: {
    //         trigger: ".third-section",
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: true,
    //         immediateRender: false,
    //       },
    //     });
    // }, []);
  return (
  <>
  <group  scale={0.05} position={[2,1,-1]} rotation-x={[-Math.PI * 0.5]}>
    <mesh geometry={nodes.Cylinder002__0
.geometry} material={material}/>
    </group></>
  )
}

export default Coin