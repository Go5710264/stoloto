import styled from "styled-components";
import PropTypes from 'prop-types';

const Number = styled.h4`
    font-size: 5vw;
    line-height: 1;
`

const TicketNumber = ({children}) => {
    return (
        <Number>
            {children}
        </Number>
    )
}

TicketNumber.propTypes = {
    children: PropTypes.string
}

export default TicketNumber;