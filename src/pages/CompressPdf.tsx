import { useState, useRef } from 'react';
import ConvertApi from 'convertapi-js';
import toast from 'react-hot-toast';
import ConvertModal from '../components/Modals/ConvertModal';
import ResultModal from '../components/Modals/ResultModal';

const CompressPdf = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string>('');

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
      let result = await convertApi.convert('pdf', 'compress', params);
      divRef.current.style.opacity = '1';
      setLoading(false);
      const url = result.files[0].Url;
      setFileUrl(url);
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
            Compress PDF file
          </h1>
          <p className='text-center font-light text-gray-500'>
            Reduce file size while optimizing for maximal PDF quality.
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
        <ConvertModal
          type='Compress'
          loading={loading}
          handlePdfToWord={handlePdfToWord}
        />
      )}
      {fileUrl && <ResultModal fileUrl={fileUrl} setFileUrl={setFileUrl} />}
    </>
  );
};

export default CompressPdf;
