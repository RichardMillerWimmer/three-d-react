const Box = () => {
    return (
        <mesh>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='blue' />
        </mesh>
    )
}

export default Box