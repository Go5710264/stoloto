import styled from 'styled-components'
import './App.css'
import FieldContainer from './components/Field'
import { 
  NUMBERS_FIRST_FIELD, 
  NUMBERS_SECOND_FIELD, 
  TEXT_FIRST_FIELD, 
  TEXT_SECOND_FIELD,
  SELECTION_FIRST_FIELD,
  SELECTION_SECOND_FIELD,
  QUANTITY_FIRST_FIELD,
  QUANTITY_SECOND_FIELD
} from './constants'
import { useEffect, useState } from 'react'

const ContainerBox = styled.div`
  padding-top: 5.31vw;
  padding-left: 3.75vw;
  padding-right: 3.75vw;
`

const GameTicket = styled.div`
  padding-left: 3.44vw;
  padding-right: 3.44vw;
  padding-top: 4.38vw;
  background-color: #fff;
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

function App() {
  const [selectFirstField, setSelectFirstField] = useState([]);
  const [selectSecondField, setSelectSecondField] = useState([])

  useEffect(() => {
    const FIRST_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_FIRST_FIELD);
    const SECOND_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_SECOND_FIELD);
  }, [])

  useEffect(() => {
    // const FIRST_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_FIRST_FIELD);
    // const SECOND_RANDOM_ARR = randomlyGeneratedArr(NUMBERS_SECOND_FIELD);
    // console.log(FIRST_RANDOM_ARR)
    // console.log(SECOND_RANDOM_ARR)
    console.log(555)
  }, [
    SELECTION_FIRST_FIELD,
    SELECTION_SECOND_FIELD
  ])

  return (
    <>
      <ContainerBox>
        <GameTicket>
          <FieldContainer
            numbers={NUMBERS_FIRST_FIELD}
            text={TEXT_FIRST_FIELD}
            selection={SELECTION_FIRST_FIELD}
            quantity={QUANTITY_FIRST_FIELD}
          />
          <FieldContainer
            numbers={NUMBERS_SECOND_FIELD}
            text={TEXT_SECOND_FIELD}
            selection={SELECTION_SECOND_FIELD}
            quantity={QUANTITY_SECOND_FIELD}
          />
        </GameTicket>
      </ContainerBox>
    </>
  )
}

export default App
