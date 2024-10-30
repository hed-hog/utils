export const formatDataWithLocale = (data: any) => {
  const newData: any = {
    locales: {},
  };

  for (const key of Object.keys(data)) {
    const keys = key.split('-');

    if (keys.length === 1) {
      newData[keys[0]] = data[keys[0]];
    } else {
      if (!newData.locales[keys[0]]) {
        newData.locales[keys[0]] = {};
      }

      newData.locales[keys[0]][keys[1]] = data[key];
    }
  }

  return newData;
};
