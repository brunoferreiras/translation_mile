import R from 'ramda';

export const filterContains = (word, resources) => {
  return R.filter(
    element => R.contains(word, element.resource.value),
    resources
  );
};

export const filterByLanguage = (language, resources) => {
  return R.filter(
    element => element.resource.language_id === R.toLower(language),
    resources
  );
};

export const filterByModule = (module, resources) => {
  return R.filter(element => element.resource.module_id === module, resources);
};

export const getLanguages = resources => {
  return R.uniq(
    R.map(element => R.toUpper(element.resource.language_id), resources)
  );
};

export const getModules = resources => {
  return R.uniq(R.map(element => element.resource.module_id, resources));
};
