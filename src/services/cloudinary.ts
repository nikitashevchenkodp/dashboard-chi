export const sendPhoto = async (file: File) => {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', 'ml_default');
  const res = await fetch('https://api.cloudinary.com/v1_1/dmd6ckoob/upload', {
    method: 'POST',
    body: fd,
  });

  return res.json();
};
