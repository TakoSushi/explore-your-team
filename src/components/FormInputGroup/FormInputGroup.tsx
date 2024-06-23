/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { ViewBtn } from '../ViewBtn/ViewBtn';
import styles from './styles/index.module.css';

interface IFormInputGroupProps {
  id: string;
  label: string;
  error?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  inputProps?: unknown;
}

export function FormInputGroup(props: IFormInputGroupProps) {
  const { id, label, error, type, placeholder, inputProps } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.formInputGroup}>
      <label htmlFor={id} className={styles.form__label}>
        {label}
      </label>
      <div className={styles.formInputWrapper}>
        <input
          type={isPasswordVisible ? 'text' : type}
          id={id}
          placeholder={placeholder}
          className={`${styles.formInput} ${error && styles.formInputError}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(inputProps ?? {})}
        />
        {type === 'password' && <ViewBtn setVisible={toggleVisibility} />}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
}

FormInputGroup.defaultProps = {
  error: '',
  type: 'text',
  placeholder: '',
  inputProps: {},
};
