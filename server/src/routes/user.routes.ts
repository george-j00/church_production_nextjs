import express, { Router } from 'express';
import { createPrayerRequest } from '../controllers/user.controller';


const router: Router = express.Router();

router.post('/api/user/prayer-request' , createPrayerRequest);


export default router;

