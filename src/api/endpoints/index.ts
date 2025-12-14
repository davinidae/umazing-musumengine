import { Router } from 'express';
import loginRouter from './login';
import miscRouter from './misc';

/**
 * Root API router.
 *
 * Mounts sub-routers for public endpoints.
 * - `/` and `/health` from `misc`
 * - `/login` from `login`
 *
 * @remarks This router is consumed by `src/api/index.ts`.
 */
export const router = Router();
router.use(miscRouter);
router.use(loginRouter);

export default router;
