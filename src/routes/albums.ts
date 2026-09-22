import express from 'express';
import { createAlbum, deleteAlbum, fetchAlbum, fetchAllAlbums, updateAlbum } from '../controller/albumsController';

const router = express.Router();

router.get('/', fetchAllAlbums);
router.get('/:id', fetchAlbum);
router.post('/', createAlbum);
router.patch('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

export default router;
