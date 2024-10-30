export const getLocalesFromItem = (item: any) => {
  if (item) {
    const fields: string[] = [];

    for (const itemLocale of (item as any).locales ?? []) {
      fields.push(itemLocale.locales.code);
    }

    return [...new Set(fields)];
  } else {
    return [];
  }
};
