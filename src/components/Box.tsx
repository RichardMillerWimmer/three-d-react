import { useBox } from "@react-three/cannon"

const Box = () => {
    const [boxRef, boxApi] = useBox(() => ({ mass: 1, position: [0, 3, 0] }))
    return (
        <mesh onClick={() => { boxApi.velocity.set(0, 2, 0) }} ref={boxRef} position={[0, 3, 0]} >
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='blue' />
        </mesh>
    )
}

export default Box