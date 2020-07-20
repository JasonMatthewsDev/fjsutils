const memoize = (fn) => {
  const memos = {};

  return (...args) => {
    const serializedArgs = JSON.stringify(args);
    memos[serializedArgs] = memos[serializedArgs] || fn(...args);

    return memos[serializedArgs];
  };
};

export default memoize;
