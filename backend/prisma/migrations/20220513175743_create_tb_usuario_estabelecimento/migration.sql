-- CreateTable
CREATE TABLE "tb_usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "st_nome" TEXT NOT NULL,
    "st_email" TEXT NOT NULL,
    "st_senha" TEXT NOT NULL,
    "dt_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "tb_estabelecimento" (
    "id_estabelecimento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "st_nome" TEXT NOT NULL,
    "st_email" TEXT NOT NULL,
    "st_senha" TEXT NOT NULL,
    "cnpj" TEXT,
    "telefone" TEXT,
    "dt_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuario_st_email_key" ON "tb_usuario"("st_email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_estabelecimento_st_email_key" ON "tb_estabelecimento"("st_email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_estabelecimento_cnpj_key" ON "tb_estabelecimento"("cnpj");
