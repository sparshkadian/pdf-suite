import { Link } from 'react-router-dom';

const ResultModal = ({
  fileUrl,
  setFileUrl,
}: {
  fileUrl: string;
  setFileUrl: (fileUrl: string) => void;
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 rounded-md shadow-md w-[350px] h-[200px] bg-gray-200 fixed convert_modal p-5'>
      <p className='text-lg font-semibold'>Click Link to Download File</p>
      <Link to={fileUrl} className='text-center text-blue-500'>
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
  );
};

export default ResultModal;
