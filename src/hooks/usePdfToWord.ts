// import ConvertApi from 'convertapi-js';
// import { RefObject } from 'react';
// import toast from 'react-hot-toast';

// export const usePdfToWord = (
//   file: File | null,
//   divRef: RefObject<HTMLDivElement>,
//   from: string,
//   to: string,
//   setFile: (arg: File | null) => void,
//   setFileUrl: (url: string) => void
// ): string => {
//   console.log(file, divRef, from, to, setFile, setFileUrl);

//   const convertPdfToWord = async () => {
//     if (!file || !divRef.current) {
//       return;
//     }
//     let convertApi = ConvertApi.auth(import.meta.env.VITE_API_SECRET);
//     let params = convertApi.createParams();
//     params.add('File', file);
//     try {
//       let result = await convertApi.convert(from, to, params);
//       divRef.current.style.opacity = '1';
//       const url = result.files[0].Url;
//       return url;
//       // setFileUrl(url);
//       // setFile(null);
//     } catch (error) {
//       console.log(error);
//       toast.error('Operation Failed!');
//       // setFile(null);
//       divRef.current.style.opacity = '1';
//     }
//   };
//   convertPdfToWord();
// };
