import ItemField from "./ItemField";
import styled from "styled-components";
import { useState } from 'react'


const FieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 2.5vw;
    margin-bottom: 5vw;

    &:last-child{
      margin-bottom: 0;
    }
`;

const FieldTitle = styled.h3`
    font-size: 4.38vw;
    font-weight: 400;
`;
const FieldDescription = styled.h3`
    font-size: 4.38vw;
    font-weight: 300;
`;

const FieldWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    opacity: ${(props) => props.$filter && .5};
`;

const Field = ({numbers, text, selection, quantity}) => {
  const [blur, setBlur] = useState(false);

  const handlerClick = (element, array, length) => {
    array.push(element.textContent);
    if(array.length === length) setBlur(true);
  }    

  return (
    <FieldContainer>
      <FieldTitle>{text.title}</FieldTitle>
      <FieldDescription>{text.description}</FieldDescription>
      <FieldWrapper $filter={blur}>
        {numbers.map((number, index) => (
          <ItemField 
          // TODO: Заменить key=индекс
            key={index}
            number={number} 
            handlerClick={
              (e) => handlerClick(
                e.target, 
                selection,
                quantity,
              )
            }
          />
        ))}
      </FieldWrapper>
    </FieldContainer>
  );
};

export default Field;
