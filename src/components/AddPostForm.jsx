function AddPostForm(props) {
  /*
    reikalingi input
    "image" text
    "title" text
    "body" textarea
    "reactions" number 0
    */
  return (
    <div>
      <h2>Create post</h2>

      <form className='card'>
        <input type='text' placeholder='Image' name='image' />
        <input type='text' placeholder='Title' name='title' />
        <textarea name='body' placeholder='Your text'></textarea>
        <input type='number' placeholder='Reactions' name='reactions' />
        <input type='number' name='userId' value={1} disabled />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
