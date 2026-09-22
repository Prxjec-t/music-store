import { Request, Response } from 'express';
import Album from '../models/Albums';

export const fetchAllAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching albums' });
  }
};

export const fetchAlbum = async (req: Request, res: Response) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album) {
      res.status(404).json({ message: 'Album not found, contact support' });
      return;
    }

    res.json(album);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching albums' });
  }
};

export const createAlbum = async (req: Request, res: Response) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ message: 'Error creating album' });
  }
};

export const updateAlbum = async (req: Request, res: Response) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(album);
  } catch (error) {
    res.status(500).json({ message: 'Error updating album' });
  }
};

export const deleteAlbum = async (req: Request, res: Response) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album) {
      res.status(404).json({ message: 'Album not found' });
      return;
    }

    await Album.findByIdAndDelete(req.params.id);

    res.json({ message: 'Album deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting album' });
  }
};
