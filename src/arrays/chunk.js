const chunk = (chunkSize, array) => array.length
  ? [array.slice(0, chunkSize), ...chunk(chunkSize, array.slice(chunkSize))]
  : [];

export default chunk;
