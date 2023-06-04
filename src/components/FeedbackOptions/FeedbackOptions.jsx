import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onButtonClick }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.btn}
              key={option}
              type="button"
              name={option}
              onClick={onButtonClick}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
