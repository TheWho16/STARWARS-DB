const compose = (...funcs) => comp => {
  return funcs.reduceRight((prevRezult, f) => f(prevRezult), comp);
};

export default compose;
