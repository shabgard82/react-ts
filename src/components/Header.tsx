import { type ReactNode } from "react";

type HeaderType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
export default function Headers({ image, children }: HeaderType) {
  return (
    <div>
      <img {...image} />
      {children}
    </div>
  );
}
