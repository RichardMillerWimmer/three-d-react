import React from 'react'

const Plane = () => {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <boxBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='grey' />
        </mesh>
    )
}

export default Plane