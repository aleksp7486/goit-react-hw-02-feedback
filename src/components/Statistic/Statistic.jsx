import { Item, Text, Value } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <Item>
        <Text>
          Good:
          <Value>{good}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Neutral:
          <Value>{neutral}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Bad:
          <Value>{bad}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Total:
          <Value>{total()}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Bad:
          <Value>{positivePercentage()}%</Value>
        </Text>
      </Item>
    </ul>
  );
};

export default Statistic;
