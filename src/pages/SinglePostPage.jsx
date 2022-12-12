import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddCommentForm from '../components/comments/AddCommentForm';
import CommentsList from '../components/comments/CommentsList';
import SinglePost from '../components/SinglePost';
import { getComments, getPosts } from '../helpers/helper';

function SinglePostPage(props) {
  // SinglePostPage
  // params === {} yra visi dinaminaiai route parametrai
  const { postId } = useParams();
  // pasiimti dinamini route parametra :postId
  // susikurti state
  const [currentPost, setCurrentPost] = useState({});
  // useEffecte parsisiusti vieno posto duomenis is be/posts/id
  useEffect(() => {
    getLatestPost();
  }, []);

  function getLatestPost() {
    getPosts(`posts/${postId}`).then((data) => {
      // console.log('data ===', data);
      setCurrentPost(data);
    });
  }

  // Comments stuff
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    getComments(postId).then((commentsGot) => setCommentsArr(commentsGot));
  }, []);

  function handleNewComment() {
    console.log('handleNewComment');
    getComments(postId).then((commentsGot) => setCommentsArr(commentsGot));
  }

  return (
    <div>
      <h1>SinglePostPage {postId}</h1>
      <SinglePost post={currentPost} isSingle />
      <AddCommentForm onNewComment={handleNewComment} postId={postId} />
      <CommentsList items={commentsArr} />
    </div>
  );
}
export default SinglePostPage;
