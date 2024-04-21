import styled from 'styled-components'
import './App.css'
import FieldContainer from './components/Field'
import { 
  NUMBERS_FIRST_FIELD, 
  NUMBERS_SECOND_FIELD, 
  TEXT_FIRST_FIELD, 
  TEXT_SECOND_FIELD,
  QUANTITY_FIRST_FIELD,
  QUANTITY_SECOND_FIELD,
  WINNING_PHRASE
} from './constants'
import magicWand from './assets/magicWand.svg'
import { useEffect, useState } from 'react'

const FIRST_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_FIRST_FIELD);
const SECOND_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_SECOND_FIELD);

const ContainerBox = styled.div`
  padding-top: 5.31vw;
  padding-left: 3.75vw;
  padding-right: 3.75vw;
`

const GameTicket = styled.div`
  padding: 4.38vw 2.24vw 7.5vw 3.54vw;
  border-radius: .94vw;
  background-color: #fff;
`

const TicketTitle = styled.div`
  width: 100%;
  padding: 0 1.5vw;
  margin-bottom: 3.75vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TicketNumber = styled.h4`
  font-size: 5vw;
  line-height: 1;
`

const TicketIcon = styled.div`
  width: 5.63vw;
  height: 5.63vw;
`

const TextСongratulations = styled.h3`
    font-size: 4.38vw;
    font-weight: 300;
`;

const ButtonResult = styled.button`
  display: block;
  width: 55.63vw;
  height: 14.14vw;
  margin: auto;
  padding: 0;
  border-radius: 12.5vw;
  border: solid .31vw #DDD;
  background: none;
  font-size: 4.38vw;
  color: #000;
  font-weight: 400;
  pointer-events: ${(props) => props.$active ? '' : 'none'};

`

function randomlyGeneratedNum(arr){
  const index = Math.floor(Math.random() * arr.length);
  const number = arr[index];
  return number; 
}

function randomlyGeneratedArr(arr){
  const result = [];
  
  if(arr.length === 2) result.push(randomlyGeneratedNum(arr));
  if(arr.length === 19) {
    for (let i = 0; i < 8; i++) {
      let number = randomlyGeneratedNum(arr);
      const repeatNumber = result.some(item => item === number);
      if(repeatNumber){
        i--;
        continue;
      }
      result.push(number);
    }
  }

  return result;
}

function comparingArrays(arrUser, arrGenerated){
  const newSet = new Set();
  const sharedArr = [...arrUser, ...arrGenerated]
  sharedArr.forEach(num => newSet.add(num))

  return newSet;
}

function App() {
  const [selectFirstField, setSelectFirstField] = useState([]);
  const [selectSecondField, setSelectSecondField] = useState([])
  const [filledFieldFirst, setFilledFieldFirst] = useState(false);
  const [filledFieldSecond, setFilledFieldSecond] = useState(false);
  const [activateButton, setActivateButton] = useState(false)
  const [showPrize, setShowPrize] = useState(false)
  
  useEffect(() => {
    filledFieldFirst && filledFieldSecond && setActivateButton(true);
  }, [
    filledFieldFirst,
    filledFieldSecond
  ])

  function showResult(){
    if(!activateButton) return false;
    const resultFirstField = comparingArrays(selectFirstField,FIRST_RANDOM_ARR);
    const resultSecondField = comparingArrays(selectSecondField,SECOND_RANDOM_ARR);
  
    if(resultFirstField.size <= 12) setShowPrize(true);
    if(resultFirstField.size === 13 && resultSecondField.size === 1) setShowPrize(true);
  } 

  return (
    <>
      <ContainerBox>
        <GameTicket>
          <TicketTitle>
            <TicketNumber>
              Билет 1
            </TicketNumber>
            <TicketIcon>
              <img src={magicWand} alt="Icon" />
            </TicketIcon>
          </TicketTitle>
          {showPrize ? 
            (
              <TextСongratulations>{WINNING_PHRASE}</TextСongratulations>
            ) : (
            <div>
              <FieldContainer
                numbers={NUMBERS_FIRST_FIELD}
                text={TEXT_FIRST_FIELD}
                handlerClick={setSelectFirstField}
                quantity={QUANTITY_FIRST_FIELD}
                storageField={selectFirstField}
                filledField={setFilledFieldFirst}
              />
              <FieldContainer
                numbers={NUMBERS_SECOND_FIELD}
                text={TEXT_SECOND_FIELD}
                handlerClick={setSelectSecondField}
                quantity={QUANTITY_SECOND_FIELD}
                storageField={selectSecondField}
                filledField={setFilledFieldSecond}
              />
              <ButtonResult
                $active={activateButton}
                onClick={showResult}
              >
                Показать результат
              </ButtonResult>
            </div>
            )
          }
        </GameTicket>
      </ContainerBox>
    </>
  )
}

export default App
