import moment from "moment";
const Calendar = ({ date }) => {
  const dayWeekRus = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const monthRus = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентебря",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const tmpDate = new Date(date);

  const tmp = moment(date);
  const currentDay = tmp.get("date");
  const currentDayWeek = tmp.get("day");
  const currentMonth = tmp.get("month");
  const currentYear = tmp.get("year");

  const firstDayCalendar = tmp.startOf("month").startOf("week").add(1, "day");

  const tdDate = [];
  for (let i = 0; i < 6; i++) {
    tdDate[i] = [];
    for (let j = 0; j < 7; j++) {
      let clone = firstDayCalendar.clone();
      tdDate[i].push(clone.add(i * 7 + j, "days"));
    }
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {dayWeekRus[currentDayWeek]}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDay}</div>
          <div className="ui-datepicker-material-month">
            {monthRus[currentMonth]}
          </div>
          <div className="ui-datepicker-material-year">{currentYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {tmpDate.toLocaleString("ru", { month: "long" }).toUpperCase()}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{currentYear}</span>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col></col>
            <col className="ui-datepicker-week-end"></col>
            <col className="ui-datepicker-week-end"></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
          </thead>
          <tbody>
            {tdDate.map((itemTr, indexTR) => (
              <tr key={indexTR}>
                {itemTr.map((itemTd, indexTd) => (
                  <td
                    className={
                      itemTd.get("date") === currentDay &&
                      itemTd.get("month") === currentMonth
                        ? "ui-datepicker-today"
                        : itemTd.get("month") !== currentMonth
                        ? "ui-datepicker-other-month"
                        : ""
                    }
                    key={indexTR + indexTd}
                  >
                    {itemTd.get("date")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
