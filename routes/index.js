import express from 'express';

import { creteUrl } from '../controllers/creteUrl.js';
import { redirectRoute } from '../controllers/redirectRoute.js';

const router = express.Router();

router.post('/', creteUrl);
router.get('/:surl', redirectRoute);

export default router;