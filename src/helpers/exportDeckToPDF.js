
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportDeckToImage = async () => {
  const element = document.getElementById('deck-export');
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
  });

  const link = document.createElement('a');
  link.download = 'mazo.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
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