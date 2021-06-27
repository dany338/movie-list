export const isValidQuery = query => {
  const re = /[#@]$/i;
  return re.exec(query);
};
  