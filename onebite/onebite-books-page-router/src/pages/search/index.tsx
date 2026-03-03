import SearchbarLayout from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
// import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  console.log(books);
  return { props: { books } };
}

export default function Page({
  books,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const route = useRouter();
  console.log(books);

  return (
    // <div>
    //   <h1>search : {route.query.q}</h1>
    // </div>
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
