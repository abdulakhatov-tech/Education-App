import { ButtonProps } from './button.propt';
import styles from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({
  appearance,
  arrow = 'none',
  children,
  size,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
        [styles.success]: appearance === 'success',
        [styles.failure]: appearance === 'failure',
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}

      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
