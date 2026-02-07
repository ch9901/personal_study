import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";

export default function Home() {
  // useEffect(() => {
  //   throw new Error();
  // }, []);

  return (
    <div>
      <h1 className={style.title}>index</h1>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
