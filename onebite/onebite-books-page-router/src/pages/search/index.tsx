import { useRouter } from "next/router";

export default function Search() {
  const route = useRouter();
  console.log(route);

  return (
    <div>
      <h1>search : {route.query.q}</h1>
    </div>
  );
}
