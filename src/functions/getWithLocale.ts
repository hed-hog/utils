export const getWithLocale = (locale: string, tableLocaleName: string, data: any) => {
    const locales = [...data[tableLocaleName]];

    delete data[tableLocaleName];

    const newData: any = { ...data, locales };
    const current = locales.find((l) => l.locales.code === locale);

    for (const key in current) {
      if (key !== 'locales') {
        newData[key] = current[key];
      }
    }

    return newData;
  }