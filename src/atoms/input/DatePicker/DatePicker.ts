import dayjs from 'dayjs';
import { useDocument } from '@react';

import { ObjectType } from 'types/global';
import { INIT_SIZE, INIT_STATUS } from './DatePickerInitData';

import classNamse from 'classnames/bind';
import style from './DatePicker.module.scss';
const cx = classNamse.bind(style);

interface Props {
  status?: string;
  size?: string;
  style?: {
    datePickerBox?: ObjectType;
    leftInput?: ObjectType;
    rightInput?: ObjectType;
    leftCalender?: ObjectType;
  };
  isDisabled?: boolean;
  placeholder?: string;
  dateFormat?: string;
  startDate?: string;
  endDate?: string;
  today?: string;
}

function DatePicker({
  status = INIT_STATUS.DEFAULT,
  size = INIT_SIZE.MEDIUM,
  style,
  isDisabled = false,
  placeholder = '',
  dateFormat = 'YYYY-MM-DD',
  startDate = dayjs().format('YYYY-MM-DD'),
  endDate = dayjs().format('YYYY-MM-DD'),
  today = dayjs().format('YYYY-MM-DD'),
}: Props) {
  const datePattern: RegExp =
    /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  useDocument(() => {
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');
  });

  return `
    <div class='${cx('date-picker-container', 'medium')}'>
      <input id='input-left' type='text' class='${cx(
        'input',
        'left',
      )}' /><input id='input-right' type='text' class='${cx(
    'input',
    'right',
  )}'/>
    </div>
  `;
}

export default DatePicker;
