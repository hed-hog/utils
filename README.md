# hedhog/utils

Welcome to the **hedhog/utils** repository! This package contains utility functions, mainly designed to simplify database migrations, particularly for adding common columns like `id` and `timestamp` in a [**TypeORM**](https://typeorm.io/) project.

## Features

- **`idColumn`**: Automatically generates an `id` column in your database via migration, making it easier to define primary keys.
- **`timestampColumn`**: Automatically creates a `timestamp` column to track creation and update times for your records.

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

### Example: Using `idColumn`

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
