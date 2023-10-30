-- CreateTable
CREATE TABLE "Group" (
    "groupId" SERIAL NOT NULL,
    "groupName" TEXT NOT NULL,
    "groupMembers" INTEGER[],
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("groupId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupName_key" ON "Group"("groupName");

-- CreateIndex
CREATE UNIQUE INDEX "Group_createdBy_key" ON "Group"("createdBy");
