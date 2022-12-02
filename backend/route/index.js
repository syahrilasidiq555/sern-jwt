import express from 'express';
import { refreshToken } from '../controllers/RefreshToken.js';
import { getUsers, Login, Logout, Register } from '../controllers/Users.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


export default router;