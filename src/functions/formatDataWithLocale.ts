export const formatDataWithLocale = (data: any) => {
  const newData: any = {
    locale: {},
  };

  const locales = new Set<string>();
  const fieldKeys = new Set<string>();

  for (const key of Object.keys(data)) {
    if (key !== "locale") {
      const keys = key.split("-");

      if (keys.length === 1) {
        newData[keys[0]] = data[keys[0]];
      } else {
        const locale = keys[0];
        const field = keys[1];

        if (!newData.locale[locale]) {
          newData.locale[locale] = {};
        }

        newData.locale[locale][field] =
          data[key] !== undefined ? data[key] : "";
        locales.add(locale);
        fieldKeys.add(field);
      }
    }
  }

  locales.forEach((locale) => {
    fieldKeys.forEach((key) => {
      if (!newData.locale[locale][key]) {
        newData.locale[locale][key] = "";
      }
    });
  });

  return newData;
};
