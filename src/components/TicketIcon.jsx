import styled from 'styled-components';
import PropTypes from 'prop-types';



const IconWrapper = styled.div`
  width: 5.63vw;
  height: 5.63vw;
  pointer-events: ${(props) => props.$blur ? 'none' : ''};
  opacity: ${(props) => props.$blur && .5};
`

const Icon = ({blur, handlerClick, imgPath, alt}) => {
  return (
    <IconWrapper $blur={blur} onClick={handlerClick}>
      <img src={imgPath} alt={alt} />
    </IconWrapper>
  );
};

Icon.propTypes = {
  blur: PropTypes.bool,
  handlerClick: PropTypes.func,
  imgPath: PropTypes.string,
  alt: PropTypes.string
}

export default Icon;
