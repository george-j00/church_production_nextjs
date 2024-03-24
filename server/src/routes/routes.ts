import express, { Router } from 'express';
import { createEvent, deleteEvent, getAllEvents } from '../controllers/admin.controller';

const router: Router = express.Router();

router.post('/api/admin/create-event' , createEvent);
router.get('/api/admin/getAllEvents' , getAllEvents);
router.delete('/api/admin/delete-event/:eventId' , deleteEvent);

export default router;

