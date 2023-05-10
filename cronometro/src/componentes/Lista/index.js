function Lista({dados, Item, Container}){
    return (
        <Container>
            {
                dados.map((dado, index) => (
                    <Item key={index}>{dado}</Item>
                ))
            }
        </Container>
    )
}

export default Lista