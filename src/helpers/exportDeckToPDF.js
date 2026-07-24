
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportDeckToImage = async (title) => {
  const element = document.getElementById('deck-export');
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
  });

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${title || 'exported_image'}.png`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url); //esto libera memoria luego de la descarga
  }, 'image/png');
};

export const exportDeckToPDF = async () => {
  const element = document.getElementById("deck-export");

  const canvas = await html2canvas(element, {
    scale: 2, // calidad
    useCORS: true,
    backgroundColor: null
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  // dimensiones A4
  const pageWidth = 210;
  const pageHeight = 297;
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let yOffset = 0;
  while (yOffset < imgHeight) {
    if(yOffset > 0){
        pdf.addPage();
    }
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    yOffset += pageHeight;
  }
  pdf.save("mazo.pdf");
};