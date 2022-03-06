import classNamse from 'classnames/bind';
import style from './DatePicker.module.scss';
const cx = classNamse.bind(style);

function DatePicker() {
  return `
    <div class='${cx('date-picker-container', 'medium')}'>
      <input class='${cx('input', 'left')}' /><input class='${cx(
    'input',
    'right',
  )}'/>
    </div>
  `;
}

export default DatePicker;
