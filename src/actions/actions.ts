'use server';

import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const CreatePost = async (formData: FormData) => {
  const { isAuthenticated } = getKindeServerSession();
  // auth check
  if (!(await isAuthenticated())) {
    redirect('/api/auth/login');
  }

  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  // update database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  // revalidate
  revalidatePath('/posts');

  redirect('/posts');
};

export async function UpdatePost(id: number, formData: FormData) {
  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get('title') as string,
      body: formData.get('body') as string,
    },
  });

  revalidatePath('/posts');
  redirect(`/posts/${id}`);
}

export async function deletePost(id: number) {
  await prisma.post.delete({ where: { id } });

  revalidatePath('/posts');
  redirect('/posts');
}
