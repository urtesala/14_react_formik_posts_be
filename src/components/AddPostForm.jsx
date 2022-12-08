import { useFormik } from 'formik';

function AddPostForm(props) {
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      reactions: 0,
      userId: 1,
    },
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });
  /*
    reikalingi input
    "image" text
    "title" text
    "body" textarea
    "reactions" number 0
    */
  //   console.log('formik.values ===', formik.values);
  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          onChange={formik.handleChange}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.title}
          type='text'
          placeholder='Title'
          name='title'
        />
        <textarea
          onChange={formik.handleChange}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        ></textarea>
        <input
          onChange={formik.handleChange}
          value={formik.values.reactions}
          type='number'
          placeholder='Reactions'
          name='reactions'
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.userId}
          type='number'
          name='userId'
          disabled
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
