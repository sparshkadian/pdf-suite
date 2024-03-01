import { RefObject } from 'react';

const ConvertModal = ({
  loading,
  type,
  divRef,
  handlePdfToWord,
  setFile,
}: {
  loading: boolean;
  type: string;
  divRef: RefObject<HTMLDivElement>;
  handlePdfToWord: () => void;
  setFile: (arg: File | null) => void;
}) => {
  return (
    <div className='overflow-hidden rounded-md shadow-md w-[300px] h-[200px] bg-gray-200 fixed convert_modal p-5'>
      <div className='relative'>
        <img
          src='/close.png'
          alt='close'
          width={20}
          className='cursor-pointer absolute -top-2 -right-3'
          onClick={() => {
            if (!divRef.current) {
              return;
            }
            setFile(null);
            divRef.current.style.opacity = '1';
          }}
        />
        <div
          className={`w-full h-[190px] flex ${
            loading ? 'flex-col' : ''
          } items-center justify-center`}
        >
          <button
            onClick={handlePdfToWord}
            className='font-semibold mt-2 p-3 bg-red-500 rounded-md text-white text-lg hover:opacity-90'
          >
            {type} File
          </button>
          {loading && <img src='/Spinner.gif' className='bg-gray-200' />}
        </div>
      </div>
    </div>
  );
};

export default ConvertModal;
