import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';
import Button from './Button/Button';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <List>
      <li>
        <Button onLeaveFeedback={() => onLeaveFeedback('good')}>Good</Button>
      </li>
      <li>
        <Button onLeaveFeedback={() => onLeaveFeedback('neutral')}>
          Neutral
        </Button>
      </li>
      <li>
        <Button onLeaveFeedback={() => onLeaveFeedback('bad')}>Bad</Button>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
