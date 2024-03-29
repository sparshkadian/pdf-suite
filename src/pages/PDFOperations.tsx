import { useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import ConvertApi from 'convertapi-js';
import toast from 'react-hot-toast';
import ConvertModal from '../components/Modals/ConvertModal';
import ResultModal from '../components/Modals/ResultModal';
import { Button } from '../components/ui/moving-border';

const PDFOperations = () => {
  let { state } = useLocation();
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
      let result = await convertApi.convert(state.from, state.to, params);
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
        <div className='mt-5 flex flex-col items-center text-center gap-2'>
          <h1 className='google-font text-2xl sm:text-4xl font-semibold'>
            {state.title}
          </h1>
          <p className='text-center text-black/70'>{state.description}</p>
          <form>
            <input
              onChange={handleFileChange}
              ref={fileRef}
              type='file'
              className='hidden'
            />

            <Button onClick={() => fileRef.current?.click()} type='button'>
              Select PDF File
            </Button>
          </form>
        </div>
      </div>
      {file && (
        <ConvertModal
          type={state.type}
          loading={loading}
          handlePdfToWord={handlePdfToWord}
          setFile={setFile}
          divRef={divRef}
        />
      )}
      {fileUrl && <ResultModal fileUrl={fileUrl} setFileUrl={setFileUrl} />}
    </>
  );
};

export default PDFOperations;
