import { useBox } from "@react-three/cannon"

const Box = () => {
    const [boxRef] = useBox(() => ({ mass: 1, position: [0, 3, 0] }))
    return (
        <mesh ref={boxRef} position={[0, 3, 0]} >
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='blue' />
        </mesh>
    )
}

export default Box