import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <img
          alt="post"
          className="w-full h-full object-cover object-center"
          src="https://placehold.jp/600x600.png"
        />
      </div>
    </Link>
  );
}
