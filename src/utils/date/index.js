export const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (dateOld) => {
  const year = dateOld.getFullYear();
  const month = dateOld.getMonth();
  const date = dateOld.getDate();

  return `${year}-${month}-${date}`;
};
