const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
      console.log('file reader', fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject('error', error);
    };
  });
};
export default convertToBase64;
