import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localeData from 'dayjs/plugin/localeData';

dayjs.locale('pt-br');
dayjs.extend(localeData);

function getWeekDayName(weekDay: number) {
    return dayjs().localeData().weekdays()[weekDay];
}

function getTimeString(date: Date) {
    return dayjs(date).format('HH:mm');
}

function getWeekStart(date: Date) {
    return dayjs(date).startOf('week').add(1, 'day').format('DD/MM/YYYY');
}

function getWeekEnd(date: Date) {
    return dayjs(date).endOf('week').add(1, 'day').format('DD/MM/YYYY');
}

const datetime = {
    getWeekDayName,
    getTimeString,
    getWeekStart,
    getWeekEnd,
};
export default datetime;
