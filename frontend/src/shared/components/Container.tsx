import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="sm:px-[1.6rem] md:px-[2.4rem] lg:px-[3.2rem] mx-auto max-w-[160rem]">
      {children}
    </div>
  );
};