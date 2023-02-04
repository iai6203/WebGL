import React from 'react'
// @three
import { OrbitControls } from '@react-three/drei'

const Control = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
    </>
  )
}

export default Control
