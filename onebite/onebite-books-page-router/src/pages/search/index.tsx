import SearchbarLayout from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/mock/book.json";
import BookItem from "@/components/book-item";

export default function Page() {
  const route = useRouter();
  console.log(route);

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
