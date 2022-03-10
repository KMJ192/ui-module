import dayjs from 'dayjs';
import { useState, useDocument } from '@react';

import { ObjectType } from 'types/global';
import { INIT_SIZE, INIT_STATUS } from './DatePickerInitData';

import Calendar from './Calendar';

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

  useDocument(() => {
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');
    if (inputLeft && inputRight) {
      inputLeft.addEventListener('click', onOpenCalendar);
      inputRight.addEventListener('click', onOpenCalendar);
    }

    return () => {
      inputLeft?.addEventListener('click', onOpenCalendar);
      inputRight?.addEventListener('click', onOpenCalendar);
    };
  });

  return {
    tagName: 'div',
    props: {
      className: cx('date-picker-container', 'medium'),
    },
    childNode: {
      tagName: 'div',
      props: {
        className: cx('input-container'),
      },
      childNode: [
        {
          tagName: 'input',
          props: {
            id: 'input-left',
            className: cx('left'),
            type: 'text',
          },
        },
        {
          tagName: 'input',
          props: {
            id: 'input-right',
            className: cx('right'),
            type: 'text',
          },
        },
      ],
    },
  };
}

export default DatePicker;
