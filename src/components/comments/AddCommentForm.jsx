import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from '../InputError';

function AddCommentForm(props) {
  // init values for form: author, text, date, postId
  const formik = useFormik({
    initialValues: {
      author: '',
      comment: '',
      date: '',
      postId: props.postId,
    },
    validationSchema: Yup.object().shape({
      author: Yup.string()
        .min(3, 'Ne maziau nei 3 simboliai')
        .max(10)
        .required('Privalomas laukas'),
      comment: Yup.string()
        .min(4, 'Ne maziau nei 4 simboliai')
        .required('Privalomas laukas'),
    }),
    onSubmit: (values, {resetForm}) => {
      values.date = new Date();
      console.log('values ===', values);
      sendFetch(values, 'comments').then((sendResult) => {
        console.log('sendResult ===', sendResult);
        // jei yra atsakyme id tai sekmingai sukurem comentara ir atnaujinam comentaru sarasa.
        if (sendResult.id) {
          props.onNewComment();
        }
        // isvalyti formos laukuus
      });
    },
  });
  // add formik to controll the form

  // submiting the form create timeStamp for the DATE

  return (
    <div className='card'>
      <h2>Add a comment</h2>
      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          onChange={formik.handleChange}
          value={formik.values.author}
          type='text'
          placeholder='Author'
          name='author'
        />
        <InputError error={formik.errors.image} touch={formik.touched.image} />
        <textarea
          onChange={formik.handleChange}
          value={formik.values.comment}
          type='text'
          placeholder='Comment'
          name='comment'
        ></textarea>
        <InputError error={formik.errors.image} touch={formik.touched.image} />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddCommentForm;
