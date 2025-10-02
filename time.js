
const moment = require('moment');

const oneWeekLater = moment().add(7, 'days').format('YYYY年MM月DD日');
console.log('1週間後は：' + oneWeekLater);


const threeDaysAgo = moment().subtract(3, 'days').format('YYYY/MM/DD');
console.log('3日前:' + threeDaysAgo);


const birthday = moment('2007-04-04'); //誕生日を設定
const age = moment().diff(birthday, 'years');

console.log('あなたの年齢は：' + age + '歳です');

const start = moment('2007-04-04');
const end = moment('2007-04-04');

const daysBetween = end.diff(start, 'days');

console.log('開始日から何日たった？→ '+ daysBetween + '日');

const dayOfWeek = moment().format('dddd');
console.log('今日は ' + dayOfWeek + 'です');

const 