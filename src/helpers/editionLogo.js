export function getEditionLogo(edImg) {
  const safeEdid = edImg || '000';
  return `${import.meta.env.VITE_API_LOGO}/${safeEdid}.${import.meta.env.VITE_IMG_EXTENSION}`;
}