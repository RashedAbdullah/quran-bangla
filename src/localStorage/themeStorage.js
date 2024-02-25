const getThemeStorage = () => {
  const data = JSON.parse(localStorage.getItem("isDark"));
  if (data) {
    return data;
  }
  return false;
};

export { getThemeStorage };
