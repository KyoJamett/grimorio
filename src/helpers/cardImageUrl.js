export function getCardImageUrl(ed_edid, edid) {
  const safeEd = ed_edid || '00';
  const safeEdid = edid || '000';
  return `http://localhost:3001/api/cards/${safeEd}/${safeEdid}`;
}