import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Helper function to check if file is an image
const isImageFile = (filename: string) => {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(filename);
};

// Get images from a specific folder
router.get('/api/images/:folderPath', async (req, res) => {
  try {
    const { folderPath } = req.params;
    const decodedPath = decodeURIComponent(folderPath);
    const imagesDir = join(process.cwd(), 'public', decodedPath);
    
    const files = await fs.readdir(imagesDir);
    const images = files
      .filter(isImageFile)
      .map(file => ({
        url: `/${decodedPath}/${file}`,
        name: file
      }));

    if (images.length === 0) {
      console.warn(`No images found in ${decodedPath}`);
    }

    res.json(images);
  } catch (error) {
    console.error('Error reading images:', error);
    res.status(500).json({ error: 'Failed to read images' });
  }
});

// Delete lovable-uploads folder
router.delete('/api/delete-folder/lovable-uploads', async (req, res) => {
  try {
    const folderPath = join(process.cwd(), 'public/lovable-uploads');
    await fs.rm(folderPath, { recursive: true, force: true }).catch(() => {
      // Ignore error if folder doesn't exist
    });
    res.json({ message: 'Folder deleted successfully' });
  } catch (error) {
    console.error('Error deleting folder:', error);
    res.status(500).json({ error: 'Failed to delete folder' });
  }
});

export default router; 