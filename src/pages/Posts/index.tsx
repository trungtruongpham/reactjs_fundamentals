import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../models/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [curPosts, setCurPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("NONE");

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
          setIsLoading(false);
          setCurPosts(posts);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, [posts.length]);

  const removePost = (event: any) => {
    const newList = curPosts.filter((p: any) => {
      return p.id != event.currentTarget.value;
    });

    setCurPosts([...newList]);
  };

  const searchPostByTilte = (event: any) => {
    const searchedList = posts.filter((p: any) => {
      return p.title.includes(event.currentTarget.value);
    });

    setCurPosts([...searchedList]);
  };

  const sortPosts = () => {
    if (sortType === "DES") {
      const sortedNone = curPosts.sort((a,b) => (a.title > b.title ? 1 : -1));
      console.log(sortedNone);
      setSortType("NONE");
    } else if (sortType === "NONE") {
      const sortedASC = curPosts.sort((a, b) => (a.id > b.id ? 1 : -1));
      setSortType("ASC");
      console.log(sortedASC);
    } else if (sortType === "ASC") {
      const sortedDES = curPosts.sort((a, b) => (a.id < b.id ? 1 : -1));
      setSortType("DES");
      console.log(sortedDES);
    }
  };

  const listPosts = curPosts.map((post: any) => {
    return (
      <tr
        key={post.id}
        className="space-x-4 pt-4 border-2 hover:bg-gray-300 text-left"
      >
        <th className="border-2 pl-2 font-light text-black">{post.id}</th>
        <th className="border-2 pl-2 font-light text-black">{post.title}</th>
        <th className="space-x-4 border-2 pl-2 font-light text-black">
          <button
            className="hover:bg-gray-500 px-2 border-2 bg-gray-300 rounded-md"
            onClick={removePost}
            value={post.id}
          >
            Remove
          </button>
          <a href={"posts/" + post.id} className="text-blue-500 underline">
            View detail
          </a>
        </th>
      </tr>
    );
  });

  return (
    <div className="p-2 space-y-4">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            className="pl-4 p-2"
            placeholder="Search by title"
            onChange={searchPostByTilte}
          />
          <table className="p-4 border-2 w-full">
            <tr className="border-2 text-left">
              <th className="border-2 pl-2">ID</th>
              <th className="border-2 pl-2" onClick={sortPosts}>
                Title - Sort {sortType}
              </th>
              <th className="border-2 pl-2">Actions</th>
            </tr>
            <tbody>{listPosts}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Posts;
