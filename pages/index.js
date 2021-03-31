import Image from "next/image";
import Head from "next/head";

import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>NextJS Startup</title>
      </Head>
      <div className="mb-5">
        <Image
          className="object-cover"
          src="/top.png"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return {
    props: { posts },
    revalidate: 3,
  };
}
