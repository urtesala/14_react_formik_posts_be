import { useEffect, useState } from 'react';
import SinglePost from '../components/SinglePost';
import { getPosts } from '../helpers/helpers';

function PostsPage(props) {
  // 3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.
  // sukurti statee
  const [postsArr, setPostsArr] = useState([]);

  // aprasyti useEffekta kurispasileidzia tik viena kartu sukurus komponenta ([])
  useEffect(() => {
    getPosts().then((dataInJs) => {
      console.log('dataInJs ===', dataInJs);
      setPostsArr(dataInJs);
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
