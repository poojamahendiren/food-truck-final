const express = require('express');
//import checkAuth from '../utils/checkAuth.js';
//import authRoutes from './auth.js';
//import usersRoutes from './task.route.js';
//import tasksRoutes from './user.route.js';
const usersRoutes = require('./userRouter.js');
const itemsRoutes = require('./itemRouter.js');
const authRoutes = require('./auth.route.js');
const  checkAuth  = require('../utils/checkAuth.js');
const router = express.Router();

router.use()
router.use('/auth', authRoutes);
router.use('/users',checkAuth,  usersRoutes);
router.use('/items',checkAuth, itemsRoutes);

module.exports = router;