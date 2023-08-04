export interface INavigate {
  onClick: () => void;
}

export interface ISlidesProps {
  slides: ISlideProps[];
}

export interface ISlideProps {
  id: number;
  bg_image: IImage;
  date: { day: string; month: string };
  image: IImage;
  subtitle: string;
  descr: string;
}

export interface IImage {
  src: string;
  alt: string;
}
