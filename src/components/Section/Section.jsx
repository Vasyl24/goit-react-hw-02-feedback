import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ children, title }) {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
