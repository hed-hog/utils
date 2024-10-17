import { TableColumn } from 'typeorm';

export const foreignColumn = (name: string, isPrimary = false) => {
  return {
    name,
    type: 'int',
    unsigned: true,
    isPrimary,
  } as TableColumn;
};
