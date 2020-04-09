import moment from 'moment';

const dateTimeFormat = {
  // TODO: give a miningful name instead of format1
  format1: 'MMM Do YYYY',
  withTime: 'MMM Do YYYY hh:mm a',
  payloadFormate: 'YYYY-MM-DD',
};

export const parseDate = (dateString, format = 'format1') => {
  return dateString
    ? moment(dateString).format(dateTimeFormat[format])
    : '--/ --/ ----';
};
