'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const PostCard = ({ post, deletePost }: PostCardProps) => {
  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <div className="flex justify-center gap-2 mt-10">
        <Link href={`/update/${post.id}`}>
          <button
            type="button"
            className="bg-blue-500 p-2 text-white rounded-md"
            // onClick={() => updatePost(post.id)}
          >
            Update
          </button>
        </Link>
        <button
          type="button"
          className="bg-blue-500 p-2 text-white rounded-md"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
