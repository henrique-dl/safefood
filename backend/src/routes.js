import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const router = Router();

router.post('/user', async (req, res) => {
  try {
    const { st_nome, st_email, st_senha } = req.body;

    const user = await prisma.tb_usuario.create({
      data: {
        st_nome,
        st_email,
        st_senha
      },
    });

    return res.json(user);
  } catch (error) {

  }
});