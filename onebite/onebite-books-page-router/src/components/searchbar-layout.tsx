import { ReactNode } from "react";

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>search-bar</div>
      {children}
    </>
  );
}
