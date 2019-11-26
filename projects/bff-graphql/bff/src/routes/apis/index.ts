import * as express from 'express';
import userRouter from './users';

const router = express.Router();

router.use('/users-modified', userRouter);
// create your parents route here

export default router;