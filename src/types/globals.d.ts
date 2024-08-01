interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

type PostCardProps = {
  post: PostType | null;
  deletePost: (id: number) => Promise<void>;
};

type ParamsType = {
  params: {
    id: string;
  };
};
