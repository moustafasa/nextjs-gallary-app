import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = Array.from({ length: 8 }, (ele, id) => `img copy ${id}.jpeg`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="grid container gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}
      >
        {images.map((img, ind) => (
          <Link key={img} href={`/images/${ind}`}>
            <Image
              src={`/${img}`}
              alt="image"
              width={300}
              height={300}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
