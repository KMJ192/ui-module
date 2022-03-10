interface Props {
  isOpenCalendar: boolean;
}

function Calendar({ isOpenCalendar }: Props) {
  return `
    ${isOpenCalendar && `<div>open</div>`}
  `;
}
export default Calendar;
