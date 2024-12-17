# <p align="center">@hedhog/utils</p>

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/177489127?s=200&v=4" alt="Hedhog Avatar" />
</p>

Welcome to the **hedhog/utils** repository! This package contains utility functions, mainly designed to simplify database migrations, particularly for adding common columns like `id` and `timestamp` in a [**TypeORM**](https://typeorm.io/) project.

## Features

- **`idColumn`**: Automatically generates an `id` column in your database via migration, making it easier to define primary keys.
- **`timestampColumn`**: Automatically creates a `timestamp` column to track creation and update times for your records.
- **`itemTranslations`**: Extracts translations from a specified translation key (e.g., group_translations, translations) within an item object. This function is particularly useful for handling translation data and integrating it smoothly into an object for display or processing.
- **`foreignColumn`**: Creates a foreign key column for a database table using TypeORM. It's particularly useful for defining foreign key relationships in migrations or database schemas.

## Installation

To install this package in your project, use the following command (npm):

```bash
npm install @hedhog/utils
```

or with Yarn:

```bash
yarn add @hedhog/utils
```

## Usage

Here’s how you can use the utility functions in your **TypeORM** migrations:

### Example using `idColumn`

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { idColumn } from "@hedhog/utils";

export class CreateYourTable1612345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "your_table",
        columns: [
          idColumn(), // generates a new ID column
          // other columns
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("your_table");
  }
}
```

### Example using `timestampColumn`

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { timestampColumn } from "@hedhog/utils";

export class CreateYourTable1612345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "your_table",
        columns: [
          // your columns
          timestampColumn(), // generates a new timestamp column
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("your_table");
  }
}
```

### Example using `itemTranslations`

```typescript
const item = {
  id: 1,
  group_translations: [
    { name: "Group Name", description: "Group Description" },
  ],
  slug: "example-slug",
};

const translatedItem = itemTranslations("group_translations", item);

console.log(translatedItem);
/*
Output:
{
  id: 1,
  slug: "example-slug",
  name: "Group Name",
  description: "Group Description"
}
*/
```

### Example using `foreignColumn`

```typescript
const foreignKey = foreignColumn({
  name: "user_id",
  isPrimary: false,
  isNullable: false,
});

console.log(foreignKey);
/*
Output:
{
  name: 'user_id',
  type: 'int',
  unsigned: true,
  isPrimary: false,
  isNullable: false,
}
*/
```

## Folder Structure

The following is the folder structure of the repository:

```plaintext
hedhog-utils/
├── src/                  # Source code for the utility functions
│   └── functions/        # Folder containing individual utility functions
├── .gitignore            # Specifies files and directories to be ignored by Git
├── node_modules/         # Directory containing project dependencies (generated automatically by running npm install)
├── package-lock.json     # Ensures consistent installs across different environments
├── package.json          # Contains project metadata and dependencies
├── tsconfig.json         # TypeScript configuration for the project
└── README.md             # Documentation for the project
```
