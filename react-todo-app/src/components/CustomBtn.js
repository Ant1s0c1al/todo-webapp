import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const CustomBtn = ({ color, text, onClick }) => {
  return (
    <>
      <Button
        className='w-100'
        variant={color}
        onClick={onClick}
      > {text}
      </Button>
    </>
  );
}

CustomBtn.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}


export default CustomBtn;
