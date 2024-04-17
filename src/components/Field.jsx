import ItemField from "./ItemField";
import styled from "styled-components";

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
    flex-wrap: wrap;
    opacity: ${(props) => props.$filter && .5};
`;

const Field = ({numbers, text, handlerClick, filter}) => {
  // const [blur, setBlur] = useState(false);
    

  return (
    <FieldContainer>
      <FieldTitle>{text.title}</FieldTitle>
      <FieldDescription>{text.description}</FieldDescription>
      <FieldWrapper $filter={filter}>
        {numbers.map((number, index) => (
          <ItemField 
            key={index} 
            number={number} 
            handlerClick={handlerClick}
          />
        ))}
      </FieldWrapper>
    </FieldContainer>
  );
};

export default Field;
