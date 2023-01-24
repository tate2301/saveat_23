import { ReactNode } from 'react';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export type Offer = {
  picture_url: string;
  title: string;
  description: string;
  discount: string;
  user: {
    display_name: string;
    profile_picture_url: string;
  };
};

export type Store = {
  picture_url: string;
  store_name: string;
  profile_pic_url?: string;
};

export type Review = {
  user: {
    profile_pic_url: string;
    display_name: string;
  };
  rating: number;
  timestamp?: number;
  text: string;
};
