import { useState, useRef } from 'react';
import ConvertApi from 'convertapi-js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const PdfToWord = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string>('');
  console.log(fileUrl);

  if (file && divRef.current) {
    divRef.current.style.opacity = '0.4';
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handlePdfToWord = async () => {
    if (!file || !divRef.current) {
      return;
    }
    let convertApi = ConvertApi.auth(import.meta.env.VITE_API_SECRET);
    let params = convertApi.createParams();
    params.add('File', file);
    try {
      setLoading(true);
      let result = await convertApi.convert('pdf', 'docx', params);
      divRef.current.style.opacity = '1';
      setLoading(false);
      const url = result.files[0].Url;
      setFileUrl(url);
      // window.open(url, '_blank');
      setFile(null);
    } catch (error) {
      console.log(error);
      toast.error('Operation Failed!');
      setLoading(false);
      setFile(null);
      divRef.current.style.opacity = '1';
    }
  };

  return (
    <>
      <div ref={divRef} className='relative h-screen w-screen p-10'>
        <div className='flex flex-col items-center text-center gap-2'>
          <h1 className='google-font text-2xl sm:text-4xl font-semibold'>
            PDF to WORD Converter
          </h1>
          <p className='text-center font-light text-gray-500'>
            Convert your PDF to WORD documents with incredible accuracy.
          </p>
          <form>
            <input
              onChange={handleFileChange}
              ref={fileRef}
              type='file'
              className='hidden'
            />

            <button
              onClick={() => fileRef.current?.click()}
              type='button'
              className='font-semibold mt-2 p-3 bg-red-500 rounded-md text-white text-lg hover:opacity-90'
            >
              Select PDF File
            </button>
          </form>
        </div>
      </div>
      {file && (
        <div className='rounded-md shadow-md w-[300px] h-[200px] bg-gray-200 fixed convert_modal p-5'>
          <div
            className={`w-full h-full flex ${
              loading ? 'flex-col' : ''
            } items-center justify-center`}
          >
            <button
              onClick={handlePdfToWord}
              className='font-semibold mt-2 p-3 bg-red-500 rounded-md text-white text-lg hover:opacity-90'
            >
              Convert File
            </button>
            {loading && <img src='./Spinner.gif' className='bg-gray-200' />}
          </div>
        </div>
      )}
      {fileUrl && (
        <div className='flex flex-col items-center justify-center gap-2 rounded-md shadow-md h-[200px] bg-gray-200 fixed convert_modal p-5'>
          <p className='text-lg font-semibold'>Click Link to Download File</p>
          <Link to={fileUrl} className='text-blue-500'>
            {fileUrl}
          </Link>

          <button
            onClick={() => {
              setFileUrl('');
            }}
            className='tracking-wider font-semibold mt-2 py-3 px-5 bg-red-500 rounded-md text-white text-lg hover:opacity-90'
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default PdfToWord;
