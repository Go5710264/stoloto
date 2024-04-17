import styled from "styled-components";

const Item = styled.li`
    width: 12.2vw;
    height: 12.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.38vw;
    border-radius: 1.56vw;
    border: solid .31vw #DDD;
    font-weight: 400;
`

const ItemField = ({number, handlerClick}) => {

    return (
        <Item
            onClick={handlerClick}
        >
            {number}
        </Item>
    )
}

export default ItemField;