import { ReactNode, useState } from "react";

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>search-bar</div>
      {count}
      <button onClick={() => setCount(count + 1)}>
        getLayout렌더링 테스트 버튼
      </button>
      {children}
    </>
  );
}
