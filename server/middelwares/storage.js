import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

export const multerUploads = multer({
  storage: storage,
  // limits: { fileSize: 11657128 },
  // fileFilter: (req, file, cb) => {
  //   console.log('file type', req);
  //   var allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];
  //   if (allowedMimes.includes(file.mimetype)) {
  //     cb(null, true);
  //   }
  //   return cb(
  //     {
  //       success: false,
  //       message: 'Invalid file type. Only jpg, png image files are allowed.',
  //     },
  //     false,
  //   );
  // },
});
