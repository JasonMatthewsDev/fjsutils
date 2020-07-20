const debounce = (func, delay, immediate) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    if (immediate) func(...args);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default debounce;
