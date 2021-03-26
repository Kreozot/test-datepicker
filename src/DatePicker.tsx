import React from 'react';

import styles from './DatePicker.module.scss';

type Props = {

};

const DatePicker: React.FC<Props> = (props) => {
  const { ...restProps } = props;

  return (
    <div className={styles.container} {...restProps}>test</div>
  );
};

export default DatePicker;
