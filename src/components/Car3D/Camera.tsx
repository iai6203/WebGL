import React from 'react'
// @three
import { PerspectiveCamera } from '@react-three/drei'

const Camera = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />
    </>
  )
}

export default Camera
