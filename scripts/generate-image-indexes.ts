import fs from 'fs/promises';
import path from 'path';

const IMAGE_FOLDERS = [
  'תמונה ראשית',
  'תמונות לגלילה',
  'מבצע במבה וקולה'
];

async function generateImageIndexes() {
  for (const folder of IMAGE_FOLDERS) {
    const folderPath = path.join('public', folder);
    try {
      const files = await fs.readdir(folderPath);
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      
      await fs.writeFile(
        path.join(folderPath, 'index.json'),
        JSON.stringify(imageFiles, null, 2)
      );
      
      console.log(`Generated index.json for ${folder}`);
    } catch (error) {
      console.error(`Error processing ${folder}:`, error);
    }
  }
}

generateImageIndexes().catch(console.error); 