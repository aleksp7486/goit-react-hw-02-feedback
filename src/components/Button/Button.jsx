import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onLeaveFeedback, children }) => {
  return (
    <Btn type="button" onClick={() => onLeaveFeedback()}>
      {children}
    </Btn>
  );
};

Button.propTyps = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Button;
