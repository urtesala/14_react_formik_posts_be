import SingleComment from './SingleComment';

function CommentsList(props) {
  const weHaveNoComments = props.items.length === 0;

  // kreiptis su fetch parsisiusti komentarus

  // ir parsisiunte noresim juos atvaizduoti
  // console.log('commentsArr ===', commentsArr);

  // CommentsList grazinti null jei commentaru nera
  if (weHaveNoComments) return null;

  return (
    <div className='card'>
      <h2>Read our comments</h2>
      <ul className='unlisted'>
        {props.items.map((cObj) => (
          <SingleComment
            key={cObj.id}
            text={cObj.text}
            date={cObj.date}
            author={cObj.author}
          />
        ))}
      </ul>
    </div>
  );
}
export default CommentsList;
