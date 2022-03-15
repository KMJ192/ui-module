import classNamse from 'classnames/bind';
import style from './Calendar.module.scss';
const cx = classNamse.bind(style);

interface Props {
  isOpenCalendar: boolean;
}

function Calendar({ isOpenCalendar }: Props) {
  return `
    <div id='date-picker-calendar' class='${cx(
      isOpenCalendar ? 'visible' : 'hidden',
    )}'>open</div>
  `;
}
export default Calendar;
