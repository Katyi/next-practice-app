import PostCard from '@/components/post-card';
import prisma from '@/lib/db';
import { Suspense } from 'react';
import { deletePost } from '@/actions/actions';

const page = async ({ params }: ParamsType) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback="Loading...">
        <PostCard post={post} deletePost={deletePost} />
      </Suspense>
    </main>
  );
};

export default page;
