/*
  Warnings:

  - You are about to alter the column `stock` on the `Coffee` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Coffee" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "stock" SET DATA TYPE INTEGER;
