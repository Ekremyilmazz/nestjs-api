const bcrypt = require('bcrypt');
const generateToken = require('../middlewares/generateToken');

let userRepository;

exports.setUserRepository = (repo) => {
  userRepository = repo;
};

exports.register = async (req, res) => {
  if (!userRepository) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  const { email, password } = req.body;
  // user existence check
  const existingUser = await userRepository.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // password hashing
  const hashedPassword = await bcrypt.hash(password, 10);
  // user creation
  const newUser = userRepository.create({ email, password: hashedPassword });
  await userRepository.save(newUser);

  res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  if (!userRepository) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  const { email, password } = req.body;
  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const token = generateToken(user);
  res.json({ token, message: 'Login successful' });
};
