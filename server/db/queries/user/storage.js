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
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/png'
    ) {
      cb(null, true);
    }
    return cb(new Error('Only .png, .jpg and .jpeg format are allowed'));
  },
});
