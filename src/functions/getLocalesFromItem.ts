export const getLocalesFromItem = (item) => {
  const fields: string[] = [];

  for (const itemLocale of (item as any).locales ?? []) {
    for (const key in itemLocale) {
      if (key !== 'locales') {
        fields.push(key);
      }
    }
  }

  return fields;
};
