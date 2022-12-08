import { useEffect } from 'react';
import { useState } from 'react';
import SinglePost from '../components/SinglePost';

function PostsPage(props) {
  // 3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.
  // sukurti statee
  const [postsArr, setPostsArr] = useState([]);

  // aprasyti useEffekta kurispasileidzia tik viena kartu sukurus komponenta ([])
  useEffect(() => {
    getPosts().then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      setPostsArr(dataInJs.posts);
    });
  }, []);
  //

  return (
    <div>
      <h1>PostsPage</h1>

      <p>cia generuosim single card</p>
      <div className='grid'>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.id} post={pObj} />
        ))}
      </div>
    </div>
  );
}
export default PostsPage;

function getPosts() {
  const url = '/db/database.json';
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.warn('some problem', err));
}