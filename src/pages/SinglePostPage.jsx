import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import { getPosts } from "../helpers/helpers";


function SinglePostPage(props) {
  // SinglePostPage
  // params === {} yra visi dinaminaiai route parametrai
  const { postId } = useParams();
  // pasiimti dinamini route parametra :postId
  // susikurti state
  const [currentPost, setCurrentPost] = useState({});
  // useEffecte parsisiusti vieno posto duomenis is be/posts/id
  useEffect(() => {
    getPosts(`posts/${postId}`).then((data) => {
      console.log('data ===', data);
      setCurrentPost(data);
    });
  }, []);
  // nupiesti single posta
  return (
    <div>
      <h1>SinglePostPage {postId}</h1>
      <SinglePost post={currentPost} isSingle />
    </div>
  );
}
export default SinglePostPage;