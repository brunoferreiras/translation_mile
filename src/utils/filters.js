import R from 'ramda';

export const filterContains = (word, resources) => {
  return R.filter(
    element => R.contains(word, element.resource.value),
    resources
  );
};

export const getLanguages = resources => {
  return R.uniq(R.map(element => R.toUpper(element.resource.language_id), resources));
};

export const getModules = resources => {
  return R.uniq(R.map(element => element.resource.module_id, resources));
};
