export const getLocaleFields = (item) => {
  const fields: {
    fieldName: string;
    localeCode: string;
    value: string;
    fieldNameLocale: string;
  }[] = [];

  for (const itemLocale of (item as any).locales ?? []) {
    for (const key in itemLocale) {
      if (key !== 'locales') {
        fields.push({
          fieldName: key,
          fieldNameLocale: `${itemLocale.locales.code}-${key}`,
          localeCode: itemLocale.locales.code,
          value: itemLocale[key],
        });
      }
    }
  }

  return fields;
};
