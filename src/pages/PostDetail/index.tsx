//@ts-ignore
import axios from "axios";
import { useEffect, useState } from "react";
//@ts-ignore
import { useParams } from "react-router-dom";
import Post from "../../models/Post";

const PostDetail = () => {
  const postId = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post>({
    id: postId.id,
    title: "",
    body: "",
    userId: "",
  });

  const getPostById = (id: string) => {
       console.log(id);
       
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostById(postId.id);
  }, [post]);

  return (
    <div className="p-4 space-y-4">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <p>Post Detail Page</p>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
