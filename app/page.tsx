"use client"

import { useState } from 'react';
import CertificateTemplate from '@/components/CertificateTemplate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const handleGeneratePDF = async () => {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) return;

    const canvas = await html2canvas(certificateElement);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('certificate.pdf');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {!isPreview ? (
        <div className="w-96 bg-white shadow p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Certificate Generator</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsPreview(true);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Course"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Preview
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <CertificateTemplate name={name} course={course} date={date} />
          <button
            onClick={handleGeneratePDF}
            className="mt-6 bg-green-500 text-white p-2 rounded"
          >
            Download PDF
          </button>
          <button
            onClick={() => setIsPreview(false)}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Edit Details
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
