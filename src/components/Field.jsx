import ItemField from "./ItemField";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { useState } from 'react'


const FieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 3.4vw;
    column-gap: 2.5vw;
    margin-bottom: 5.4vw;
`;

const FieldTitle = styled.h3`
    padding-left: 1.5vw;
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
    pointer-events: ${(props) => props.$filter && 'none'};
`;

const Field = ({numbers, text, handlerClick, quantity, storageField, filledField, blockRandomGen}) => {
  const [blur, setBlur] = useState(false);

  const addNumberArr = (element) => {
    if(storageField.length === 0) blockRandomGen(true) 
    handlerClick(preArr =>[...preArr, parseInt(element.textContent)])
    if(storageField.length === quantity - 1) {
      setBlur(true);
      filledField(true);
    }
  };
   

  return (
    <FieldContainer>
      <FieldTitle>{text.title}</FieldTitle>
      <FieldDescription>{text.description}</FieldDescription>
      <FieldWrapper $filter={storageField.length === quantity ? true : blur}>
        {numbers.map((number, index) => (
            <ItemField 
              key={index}
              number={number} 
              eventClick={
                (e) => addNumberArr(e.target)
              }
              generated={storageField.some(item => item === number)}
            />
          ))
        }
      </FieldWrapper>
    </FieldContainer>
  );
};

Field.propTypes = {
  numbers: PropTypes.array,
  text: PropTypes.object,
  handlerClick: PropTypes.func,
  quantity: PropTypes.number,
  storageField: PropTypes.array,
  filledField: PropTypes.func,
  blockRandomGen: PropTypes.func
}

export default Field;
