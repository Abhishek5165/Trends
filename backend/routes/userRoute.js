import express from 'express';
import { loginUser,registerUser,adminLogin, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';
const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);

userRouter.get('/profile',verifyToken,getUserProfile);
userRouter.put('/profile', verifyToken, updateUserProfile);

export default userRouter;