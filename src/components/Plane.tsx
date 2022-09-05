import { usePlane } from "@react-three/cannon"

const Plane = () => {
    const [planeRef] = usePlane(() => ({ position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] }))
    return (
        <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} >
            <boxBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='grey' />
        </mesh>
    )
}

export default Plane