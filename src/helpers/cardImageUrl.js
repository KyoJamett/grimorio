export function getCardImageUrl(ed_edid, edid) {
  const safeEd = ed_edid || '00';
  const safeEdid = edid || '000';
  return `${import.meta.env.VITE_API_URL}/api/cards/${safeEd}/${safeEdid}`;
}