const provokeArray = (count = 3, item = {}) => {
  const array = new Array(count);
  return array.fill().map((_, index) => {
    return typeof item === "function" ? item(index) : item;
  });
};

export default provokeArray;
