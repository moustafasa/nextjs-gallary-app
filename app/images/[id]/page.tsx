import ImagePage from "@/app/_components/ImagePage";

type props = { params: { id: string } };

function page({ params }: props) {
  return <ImagePage id={params.id} />;
}

export default page;
