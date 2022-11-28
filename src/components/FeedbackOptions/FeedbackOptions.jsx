import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import Button from './Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li>
            <Button onLeaveFeedback={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
