import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchbar-layout.module.css";

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearch((router.query.q as string) || "");
  }, [router.query.q]);

  const onSubmit = () => {
    if (!search || router.query.q === search) return;
    router.push(`/search?q=${search}`);
  };
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
          value={search}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
