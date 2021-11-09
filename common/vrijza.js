import * as dayjs from 'dayjs';

var now = dayjs();

var devrijdag = dayjs().day(5);

const diffvrij = now.diff(devrijdag, 'day');

export const vrijdag = () => {
	if (diffvrij === 0)
		return devrijdag.add('7', 'day').format('dddd, D, MMMM, YYYY');
	else return devrijdag.format('dddd, D, MMMM, YYYY');
};

var dezaterdag = dayjs().day(6);

const diffza = now.diff(dezaterdag, 'day');

export const zaterdag = () => {
	if (diffza === 0)
		return dezaterdag.add('7', 'day').format('dddd, D, MMMM, YYYY');
	else return dezaterdag.format('dddd, D, MMMM, YYYY');
};
