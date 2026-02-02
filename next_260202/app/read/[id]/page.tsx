export default async function Read(props: any) {
  const { id } = await props.params;

  return (
    <>
      <h2>READ</h2>
      parameter : {id}
    </>
  );
}
