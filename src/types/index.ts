export interface pdfFeatureProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  from: string;
  to: string;
  type: string;
}

export interface Params {
  from: string;
  to: string;
  title: string;
  type: string;
  [key: string]: string | undefined; //index Signature
}
