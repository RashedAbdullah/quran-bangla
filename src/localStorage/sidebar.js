const getHideSidebar = () => {
  const data = JSON.parse(localStorage.getItem("isHide"));
  if (data) {
    return data;
  }
  return false;
};

export { getHideSidebar };
