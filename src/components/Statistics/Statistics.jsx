import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.counts}>
      <li>
        <p className={css.stattext}>
          Good: <span className={css.statvalue}>{good}</span>
        </p>
      </li>
      <li>
        <p className={css.stattext}>
          Neutral: <span className={css.statvalue}>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.stattext}>
          Bad: <span className={css.statvalue}>{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.stattext}>
          Total: <span className={css.statvalue}>{total}</span>
        </p>
      </li>
      <li>
        <p className={css.stattext}>
          Positive feedback:{' '}
          <span className={css.statvalue}>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
