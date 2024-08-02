import UpdateForm from '@/components/update-form';
import prisma from '@/lib/db';

const Page = async ({ params }: ParamsType) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  // console.log(post);
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Update post</h1>

      <UpdateForm post={post} />
    </main>
  );
};

export default Page;
