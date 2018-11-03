import R from 'ramda';

export const filterContains = (word, resources) => {
  return R.filter(
    element => R.contains(word, element.resource.value),
    resources
  );
};
