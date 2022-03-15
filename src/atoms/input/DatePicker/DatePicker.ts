import dayjs from 'dayjs';
import { useState, useDocument } from '@react';

import { ObjectType } from 'types/global';
import { INIT_SIZE, INIT_STATUS } from './DatePickerInitData';

import Calender from './Calendar';

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
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const datePattern: RegExp =
    /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;

  const onOpenCalendar = () => {
    setIsOpenCalendar(true);
  };

  const onClickArea = (e: MouseEvent) => {
    const calendar = document.getElementById('date-picker-calendar');
  };

  useDocument(() => {
    const inputLeft = document.getElementById('datepicker-input-left');
    const inputRight = document.getElementById('datepicker-input-right');

    document.addEventListener('click', onClickArea);

    if (inputLeft && inputRight) {
      inputLeft.addEventListener('click', onOpenCalendar);
      inputRight.addEventListener('click', onOpenCalendar);
    }

    return () => {
      document.removeEventListener('click', onClickArea);
      inputLeft?.addEventListener('click', onOpenCalendar);
      inputRight?.addEventListener('click', onOpenCalendar);
    };
  });

  return `
    <div class='${cx('date-picker-container', size)}'>
      <div class='${cx('input-container')}'>
        <input id='datepicker-input-left' class='${cx('left')}' type='text'/>
        <input id='datepicker-input-right' class='${cx('right')}' type='text'/>
      </div>
      ${Calender({ isOpenCalendar })}
    </div>
  `;
}

export default DatePicker;
