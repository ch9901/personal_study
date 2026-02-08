import SearchbarLayout from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const route = useRouter();
  console.log(route);

  return (
    <div>
      <h1>search : {route.query.q}</h1>
    </div>
  );
}
Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
