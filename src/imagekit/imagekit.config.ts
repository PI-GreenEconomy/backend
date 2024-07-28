import ImageKit from 'imagekit';
import * as dotenv from 'dotenv';

dotenv.config();

export const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_PUBLIC_KEY || 'YOUR_PUBLIC_API_KEY',
  privateKey: process.env.IMAGE_PRIVATE_KEY || 'YOUR_PRIVATE_API_KEY',
  urlEndpoint:
    process.env.IMAGE_URL || 'https://ik.imagekit.io/YOUR_IMAGEKIT_ID',
});
