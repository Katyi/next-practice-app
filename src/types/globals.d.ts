type Post = {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
} | null;

type postProps = {
  post: Post;
};

type PostCardProps = {
  post: Post;
  deletePost: (id: number) => Promise<void>;
};

type ParamsType = {
  params: {
    id: string;
  };
};
