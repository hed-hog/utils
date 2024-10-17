import { TableColumn } from 'typeorm';

export const foreignColumn = ({
  name,
  isPrimary = false,
  isNullable = false,
}: TableColumn) => {
  return {
    name,
    type: 'int',
    unsigned: true,
    isPrimary,
    isNullable,
  } as TableColumn;
};
