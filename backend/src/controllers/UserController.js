import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  async createUser(req, res) {
    try {
      const { st_nome, st_email, st_senha } = req.body;
  
      let user = await prisma.tb_usuario.findUnique({ where: { st_email } });
  
      if (user) {
        return res.json({ error: 'Já existe um usuário com este e-mail.'})
      }
  
      user = await prisma.tb_usuario.create({
        data: {
          st_nome,
          st_email,
          st_senha
        },
      });
  
      return res.json(user);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findAllUsers(req, res) {
    try {
      const users = await prisma.tb_usuario.findMany();
      return res.json(users);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findUser(req, res) {
    try {
      const {email} = req.params;

      const user = await prisma.tb_usuario.findUnique({ where: {st_email: email} });

      if (!user) {
        return res.json({ error: 'Não foi possível encontrar esse usuário.'})
      }

      return res.json(user);
    } catch(error) {
      return res.json({ error });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { st_nome, st_email } = req.body;

      let user = await prisma.tb_usuario.findUnique({ where: {id_usuario: Number(id)} });

      if (!user) {
        return res.json({ error: 'Não foi possível encontrar esse usuário.'})
      }

      user = await prisma.tb_usuario.update({ 
        where: { 
          id_usuario: Number(id) 
        },
        data: {
          st_nome,
          st_email
        } 
      });

      return res.json(user);
    } catch (error) {
      res.json({ error })
    }
  },

  async deleteUser(req, res) {
    try {
      const {id} = req.params;

      const user = await prisma.tb_usuario.findUnique({ where: {id_usuario: Number(id)} });

      if (!user) {
        return res.json({ error: 'Não foi possível encontrar esse usuário.'})
      }

      await prisma.tb_usuario.delete({ where: { id_usuario: Number(id) }})

      return res.json({message: `Usuário: ${user.st_nome} deletado com sucesso.`});
    } catch(error) {
      return res.json({ error });
    }
  },
}