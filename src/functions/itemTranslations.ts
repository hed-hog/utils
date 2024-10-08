export const itemTranslations = <T extends any>(
  translationKey: string,
  item: T
) => {
  let translations = {};

  if (item[translationKey].length > 0) {
    translations = { ...item[translationKey][0] };
  }

  delete item[translationKey];

  return {
    ...(item as any),
    ...translations,
  };
};
