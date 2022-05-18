import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  async createEstablishment(req, res) {
    try {
      const { st_nome, st_email, st_senha, st_endereco, cnpj, telefone } = req.body;
  
      let estabelecimento = await prisma.tb_estabelecimento.findUnique({ where: { st_email } });
  
      if (estabelecimento) {
        return res.json({ error: 'Já existe um estabelecimento com este e-mail.'})
      }
  
      estabelecimento = await prisma.tb_estabelecimento.create({
        data: {
          st_nome,
          st_email,
          st_senha,
          st_endereco,
          cnpj,
          telefone
        },
      });

      console.log(estabelecimento)
  
      return res.json(estabelecimento);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findAllEstablishment(req, res) {
    try {
      const estabelecimentos = await prisma.tb_estabelecimento.findMany();
      return res.json(estabelecimentos);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findEstablishment(req, res) {
    try {
      const {email} = req.params;

      const estabelecimento = await prisma.tb_estabelecimento.findUnique({ where: {st_email: email} });

      if (!estabelecimento) {
        return res.json({ error: 'Não foi possível encontrar esse estabelecimento.'})
      }

      return res.json(estabelecimento);
    } catch(error) {
      return res.json({ error });
    }
  },

  async updateEstablishment(req, res) {
    try {
      const { id } = req.params;
      const { st_nome, st_email } = req.body;

      let estabelecimento = await prisma.tb_estabelecimento.findUnique({ where: {id_estabelecimento: Number(id)} });

      if (!estabelecimento) {
        return res.json({ error: 'Não foi possível encontrar esse estabelecimento.'})
      }

      estabelecimento = await prisma.tb_estabelecimento.update({ 
        where: { 
          id_estabelecimento: Number(id) 
        },
        data: {
          st_nome,
          st_email
        } 
      });

      return res.json(estabelecimento);
    } catch (error) {
      res.json({ error })
    }
  },

  async deleteEstablishment(req, res) {
    try {
      const {id} = req.params;

      const estabelecimento = await prisma.tb_estabelecimento.findUnique({ where: {id_estabelecimento: Number(id)} });

      if (!estabelecimento) {
        return res.json({ error: 'Não foi possível encontrar esse estabelecimento.'})
      }

      await prisma.tb_estabelecimento.delete({ where: { id_estabelecimento: Number(id) }})

      return res.json({message: `Estabelecimento: ${estabelecimento.st_nome} deletado com sucesso.`});
    } catch(error) {
      return res.json({ error });
    }
  },
}