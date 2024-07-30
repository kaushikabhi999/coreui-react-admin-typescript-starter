export const API_URL = process.env.REACT_APP_API_ENDPOINT;

const d = new Date();
const leapYear = d.getFullYear() % 4 === 0;
const noOfDaysInFeb = leapYear ? 29 : 28;
const _31Days = 31;
const _30Days = 30;
export const noOfDaysInMonth = [_31Days, noOfDaysInFeb, _31Days, _30Days, _31Days, _30Days, _31Days, _31Days, _30Days, _31Days, _30Days, _31Days];
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function getLast15Years() {
    const currentYear = new Date().getFullYear();
    const years: string[] = [];

    for (let i = 0; i < 30; i++) {
        years.push((currentYear - i).toString());
    }

    return years;
}