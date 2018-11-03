import moment from 'moment';

export const formatDateUTC = date => {
  let formated = moment(date).utc().format('DD/MM/YYYY HH:mm:ss');
  return formated;
};
