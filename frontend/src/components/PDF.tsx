import React from 'react';
import Axios from 'axios';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Menu } from '../types/types';


const PDF: React.FC<Menu> = ({
    menuname, 
    drinks
  }) => {

const generatePDF = () => {
    Axios.post('/create-pdf', {menuname: menuname, drinks: drinks})
        .then(() => Axios.get('/get-pdf', { responseType: 'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf'});
            saveAs(pdfBlob, 'menu.pdf');
        });
}
   
    return (
        <div>
            <button className="btn btn-outline-dark" onClick={generatePDF}>PDF</button>
        </div>
    );
}

export default PDF;
