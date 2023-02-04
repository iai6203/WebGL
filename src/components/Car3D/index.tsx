import React, { Suspense } from 'react'
// @three
import { Canvas } from '@react-three/fiber'
import { CubeCamera, Environment } from '@react-three/drei'
//
import Control from './Control'
import Camera from './Camera'
import Background from './Background'
import Light from './Light'
import Ground from './Ground'
import Rings from './Rings'
import Car from './Car'

const CarShow = () => {
  return (
    <>
      <Control />
      <Camera />
      <Background />
      <Light />
      <Ground />
      <Rings />
      <CubeCamera resolution={256} frames={Infinity}>
        {/* @ts-ignore */}
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
    </>
  )
}

const Car3D = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  )
}

export default Car3D
