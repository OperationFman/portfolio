export type ParallaxArtProps = {
  windowHeight: number;
  selectedTheme: string;
  parallaxBackground: string;
  scrollTo?: (page: number) => void;
};

export type AnimationProps = {
  windowHeight: number;
  selectedTheme: string;
  styles: {
    centerImage: {
      display: string;
      alignItems: string;
      justifyContent: string;
    };
  };
  children?: React.ReactNode;
};
