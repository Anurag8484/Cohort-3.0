/*
  Warnings:

  - You are about to drop the column `time` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Todo" DROP COLUMN "time";

-- AddForeignKey
ALTER TABLE "public"."Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
