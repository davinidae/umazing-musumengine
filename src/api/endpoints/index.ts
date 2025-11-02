import { Router } from 'express';
import loginRouter from './login';
import miscRouter from './misc';

const router = Router();

// Mount individual endpoint routers
router.use(miscRouter);
router.use(loginRouter);

export default router;
