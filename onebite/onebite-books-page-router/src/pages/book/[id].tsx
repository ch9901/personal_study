import { useRouter } from "next/router";
import books from "@/mock/book.json";
import style from "./[id].module.css";

export default function Page() {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    books[0];

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
  // const router = useRouter();
  // console.log(router);

  // return (
  //   <div>
  //     <h1>{router.query.id} book detail page</h1>
  //   </div>
  // );
}
