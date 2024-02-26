import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Stats = ({ good, neutral, bad, total, positiveFeedback }) => {    
    return (
        <>
            <ul className={css.stats}>
                <li className={css.good}>Good: {good}</li>
                <li className={css.neutral}>Neutral: {neutral}</li>
                <li className={css.bad}>Bad: {bad}</li>
                <li className={css.neutral}>Total: {total}</li>
                <li className={css.neutral}>Positive feedback: {positiveFeedback}%</li>
            </ul>
        </>
    )
}

Stats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Stats;