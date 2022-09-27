import dayjs from 'dayjs';
const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

export const transformData = (data: string) => {
  return dayjs(data).format('LL');
};
