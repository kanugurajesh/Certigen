import React from "react";

interface CertificateTemplateProps {
  name: string;
  course: string;
  date: string;
}

const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  name,
  course,
  date,
}) => {
  return (
    <div
      id="certificate"
      className="border-4 border-dashed border-blue-500 p-8 w-[800px] h-[600px] text-center bg-white shadow-lg flex flex-col gap-2 items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-blue-700">
        Certificate of Completion
      </h1>
      <p className="text-lg mt-4">This is to certify that</p>
      <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
      <p className="text-lg mt-2">has successfully completed the</p>
      <div className="flex gap-2 items-center justify-center">
        <h3 className="text-2xl font-bold text-blue-600">{course}</h3>
        <span className="text-xl font-bold">Course</span>
      </div>
      <p className="text-lg mt-4">on</p>
      <h4 className="text-lg text-gray-700 font-bold">{date}</h4>
    </div>
  );
};

export default CertificateTemplate;
