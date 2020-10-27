import React from 'react';
import Axios from 'axios';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const PDF = () => {


const generatePDF = () => {
    const menu = {name: "summer"};
    Axios.post('/create-pdf', menu)
        .then(() => Axios.get('/get-pdf', { responseType: 'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf'});
            saveAs(pdfBlob, 'menu.pdf');
        });
}
   
    return (
        <div>
            <button onClick={generatePDF}>PDF</button>
                        <div id="capture">
                <p>Hello in my life</p>
                <span>How can hellp you</span>
            </div>
        </div>
    );
}

export default PDF;
