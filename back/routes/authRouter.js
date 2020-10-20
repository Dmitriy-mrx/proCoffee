/* eslint-disable no-underscore-dangle */
import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/userModel.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Privet');
});

router.post('/registration', async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body.formData;
  let newUser;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    // .exact()
    req.session.user = newUser;
  } catch (error) {
    return res.json({ err: 'Пользователь уже существует или данные не верны!', error });
  }
  return res.json({
    id: newUser._id,
    login: newUser.username,
    email: newUser.email,
    status: 'ok',
  });
});

router.post('/login', async (req, res) => {
  let findUser;
  const {
    email,
    password,
  } = req.body;
  try {
    findUser = await User.findOne({ email });
    if (findUser && await bcrypt.compare(password, findUser.password)) {
      req.session.user = findUser;
    }
  } catch (error) {
    return res.json(error);
  }
  return res.json({
    id: findUser._id,
    login: findUser.username,
    email: findUser.email,
    status: 'ok',
  });
});

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy();
    res.clearCookie('user_sid');
    return res.json('ok');
  }
  return res.json('ne ok');
});

export default router;
