const median = array => {
  const mid = Math.floor(array.length / 2);
  const sorted = [...array].sort((a, b) => a - b);

  return array.length % 2 ? sorted[mid] : (sorted[mid] + sorted[mid - 1]) / 2;
};

export default median;
