const Box = () => {
    return (
        <mesh position={[0, 1, 0]}>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='blue' />
        </mesh>
    )
}

export default Box