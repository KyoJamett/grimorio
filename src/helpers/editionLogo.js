export function getEditionLogo(edid) {
  const safeEdid = edid || '000';
  return `${import.meta.env.VITE_API_LOGO}/${safeEdid}.${import.meta.env.VITE_IMG_EXTENSION_PROD}`;
}