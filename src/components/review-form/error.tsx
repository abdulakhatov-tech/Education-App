import styles from './review-form.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { ErrorProps } from './review-form.props';

const Error = ({ setError }: ErrorProps): JSX.Element => {
  return (
    <div className={cn(styles.error, styles.panel)}>
      <div className={styles.successTitle}>Something wen wrong</div>
      <CloseIcon className={styles.close} onClick={() => setError(false)} />
    </div>
  );
};

export default Error;
