import Image from "next/image";

type Props = { id: string };

function ImagePage({ id }: Props) {
  const image = `/img copy ${id}.jpeg`;
  return (
    <div className="flex justify-center w-100 mt-32">
      <Image src={image} alt="img" width={500} height={500} />
    </div>
  );
}

export default ImagePage;
