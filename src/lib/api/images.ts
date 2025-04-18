import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export async function getImagesFromFolder(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { folderPath } = req.query;
    const imagesDir = path.join(process.cwd(), 'public', folderPath as string);
    
    const files = await fs.readdir(imagesDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        url: `/${folderPath}/${file}`,
        name: file
      }));

    return res.status(200).json(images);
  } catch (error) {
    console.error('Error reading images:', error);
    return res.status(500).json({ error: 'Failed to read images' });
  }
}

export async function deleteFolder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const folderPath = path.join(process.cwd(), 'public', 'lovable-uploads');
    await fs.rm(folderPath, { recursive: true, force: true });
    return res.status(200).json({ message: 'Folder deleted successfully' });
  } catch (error) {
    console.error('Error deleting folder:', error);
    return res.status(500).json({ error: 'Failed to delete folder' });
  }
} 