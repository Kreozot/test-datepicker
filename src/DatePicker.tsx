import React, { useState } from 'react';
import ClayDatePicker from '@clayui/date-picker';

import styles from './DatePicker.module.scss';
import './DatePicker.scss';

type Props = {

};

const DatePicker: React.FC<Props> = (props) => {
  const { ...restProps } = props;

  const [value, setValue] = useState(null);

  return (
    <ClayDatePicker
      onValueChange={setValue}
      placeholder="YYYY-MM-DD"
      spritemap="/icons.svg"
      value={value}
      years={{
        end: 2024,
        start: 1997,
      }}
    />
  );
};

export default DatePicker;
