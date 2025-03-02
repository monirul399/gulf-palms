import SingleProject from "./SingleProject";

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) {
  const slug = (await params).id;

  return (
    <div className="">
      <SingleProject slug={slug} />
    </div>
  );
}
