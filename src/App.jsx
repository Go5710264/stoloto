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
import { useEffect } from 'react'

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


function App() {
  useEffect(() => {
    const RANDOM_INDEX = Math.floor(Math.random() * NUMBERS_FIRST_FIELD.length);
    // const ARR_RANDOM_NUMBERS = 
  }, [])
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
