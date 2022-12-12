import { useFormik } from 'formik';
import { sendFetch } from '../../helpers/helper';

function AddCommentForm(props) {
  // init values for form: author, text, date, postId

  // prideti comentaro validacijas:
  // author: textas, ne maziau 4 raides, privalomas, (extra (kad nebutu skaiciu) )
  // textas: min 10 simboliu, privalomas

  // atvaizduoti klaidas po inputu ir textarea

  const formik = useFormik({
    initialValues: {
      author: '',
      text: '',
      date: '',
      postId: props.postId,
    },
    onSubmit: (values, { resetForm }) => {
      // values yra objektas su visom formiko reiksmem aprasytom initalValues
      // submiting the form create timeStamp for the DATE
      values.date = new Date();
      console.log('values ===', values);
      sendFetch(values, 'comments').then((sendResult) => {
        console.log('sendResult ===', sendResult);
        // jei yra atsakyme id tai sekmingai sukurem comentara ir atnaujinam comentaru sarasa.
        if (sendResult.id) {
          // sekmingai pridetas komentaras
          props.onNewComment();
          // isvalyti formos laukus
          resetForm();
        } else {
          // kazkas negerai nes neturim naujo comentaro id
          console.warn('kazkas negerai nes neturim naujo comentaro id ');
        }
      });
    },
  });
  // add formik to controll the form

  return (
    <div className='card'>
      <h2>Add a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.author}
          type='text'
          name='author'
          placeholder='Author'
        />
        <textarea
          onChange={formik.handleChange}
          value={formik.values.text}
          name='text'
          placeholder='Your comment'
        ></textarea>
        <button type='submit'>Comment</button>
      </form>
    </div>
  );
}
export default AddCommentForm;
