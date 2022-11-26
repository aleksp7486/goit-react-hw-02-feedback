import { Btn } from './Button.styled';

const Button = ({ children, onLeaveFeedback }) => {
  return (
    <Btn type="button" onClick={() => onLeaveFeedback()}>
      {children}
    </Btn>
  );
};

export default Button;
