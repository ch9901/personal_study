import { useRouter } from "next/router";
import style from "./[id].module.css";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchOneBook from "@/lib/fetch-one-book";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  return { props: { book } };
}

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return <div>오류가 발생했습니다. 다시시도해주세요</div>;
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

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
