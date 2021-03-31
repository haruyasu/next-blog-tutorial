import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function PostData({ post }) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.created_at}</p>
      <p className="whitespace-pre-wrap">{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
