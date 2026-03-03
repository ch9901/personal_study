import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";

export function getServerSideProps() {
  const data = "임시데이터";
  return { props: { data } };
}

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={`recommend-${book.id}`} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={`all-${book.id}`} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
