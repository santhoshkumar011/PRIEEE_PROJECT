-- CreateEnum
CREATE TYPE "IsTaksAssigned" AS ENUM ('YES', 'NO');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isTaskCompleted" "IsTaksAssigned" NOT NULL DEFAULT 'NO';
