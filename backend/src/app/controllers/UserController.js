import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, employee, salary, cpf } = req.body;

    const cpfExists = await User.findOne({ where: { cpf } });

    if (cpfExists) {
      return res.status(409).json({ message: 'CPF already exists' });
    }

    const user = await User.create({ name, employee, salary, cpf });

    return res.json(user);
  }
}

export default new UserController();
