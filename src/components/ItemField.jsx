import { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const Item = styled.li`
    width: ${(props) => props.$selected ? "10.63vw" : "12.2vw"};
    height: ${(props) => props.$selected ? "10.63vw" : "12.2vw"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.38vw;
    border-radius: 1.56vw;
    border: solid .31vw #DDD;
    font-weight: 400;
    transform: ${(props) => props.$selected ? "scale(.9)" : ''};
    background-color: ${(props) => props.$selected ? "#FFD205" : ""};
`

const ItemField = ({number, eventClick}) => {
    const [selected, setSelected] = useState(false);

    return (
        <Item
            $selected={selected}
            onClick={(e)=>{
                eventClick(e);
                setSelected(true)
            }}
        >
            {number}
        </Item>
    )
}
ItemField.propTypes = {
    number: PropTypes.number,
    eventClick: PropTypes.func,
}

export default ItemField;