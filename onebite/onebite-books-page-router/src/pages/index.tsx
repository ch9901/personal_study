import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export async function getStaticProps() {
  const allBooks = await fetchBooks();
  const randomBooks = await fetchRandomBooks();

  return { props: { allBooks, randomBooks } };
}

export default function Home({
  allBooks,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allBooks, randomBooks);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={`recommend-${book.id}`} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={`all-${book.id}`} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
