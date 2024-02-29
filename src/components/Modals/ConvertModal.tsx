const ConvertModal = ({
  loading,
  type,
  handlePdfToWord,
}: {
  loading: boolean;
  type: string;
  handlePdfToWord: () => void;
}) => {
  return (
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
          {type} File
        </button>
        {loading && <img src='./Spinner.gif' className='bg-gray-200' />}
      </div>
    </div>
  );
};

export default ConvertModal;
