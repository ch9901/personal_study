export default async function Read(props: any) {
  const { id } = await props.params;
  const resp = await fetch(`http://localhost:9999/topics/${id}`);
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
      parameter : {id}
    </>
  );
}
