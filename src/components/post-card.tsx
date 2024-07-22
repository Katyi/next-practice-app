import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

const PostCard = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
};

export default PostCard;
