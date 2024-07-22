import PostCard from '@/components/post-card';
import { Suspense } from 'react';

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback="Loading...">
        <PostCard params={params} />
      </Suspense>
    </main>
  );
};

export default page;
