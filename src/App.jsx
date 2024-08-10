
// // // import './App.css'
// // import About from './components/About'
// // import CanvasContainer from './components/CanvasContainer'
// // import Header from './components/Header'
// // import Hero from './components/Hero'
// // import More from './components/More'

// // function App() {

// //   return (
// //     <div className=''>
// //       <div className='h-screen w-full fixed top-8 '>

// //       <CanvasContainer />
// //       </div>
// //       <Header />
// //       <Hero />
// //       <About />
// //       <More />

// //     </div>
// //   )
// // }

// // export default App



import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Model from "./components/Model"
import Overlay from "./components/Overlay"
import Header from './components/Header'
import StarsCanvas from "./components/Stars"
import EarthCanvas from "./components/Earth"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
    <Header />
    <StarsCanvas />
    {/* <EarthCanvas /> */}
      <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client"  >
        {/* <ambientLight intensity={1} /> */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} />
        {/* <OrbitControls enableZoom={false}/> */}
        <Suspense fallback={null}>
          <Model scroll={scroll}/>
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}





