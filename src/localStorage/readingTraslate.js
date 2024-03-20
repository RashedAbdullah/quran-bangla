const getReadingStorage = () => {
  const data = JSON.parse(localStorage.getItem("isReading"));
  if (data) {
    return data;
  }
  return false;
};

export { getReadingStorage };
