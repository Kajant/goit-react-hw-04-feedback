import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li className={css.item}>
          <button className={css[option]} onClick={event => leaveFeedback(option.toLowerCase())}>
            {option}
          </button>
        </li>
      ))}
    </ul>

  );
};

export default FeedbackOptions;
