import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputError from './InputError';

function AddPostForm(props) {
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      reactions: 0,
      tags: '',
      userId: 1,
    },
    validationSchema: Yup.object().shape({
      image: Yup.string()
        .min(5, 'Ne maziau nei 5 simboliai')
        .max(120)
        .required('Privalomas laukas'),
      title: Yup.string()
        .min(4, 'Ne maziau nei 4 simboliai')
        .max(20)
        .required('Privalomas laukas'),
      body: Yup.string()
        .min(10, 'Ne maziau nei 10 simboliu')
        .required('Privalomas laukas'),
      reactions: Yup.number()
        .positive()
        .max(15)
        .integer()
        .required('Privalomas laukas'),
      userId: Yup.number().positive().min(1).max(5),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);

      
      // alert(JSON.stringify(values, null, 2));

      // sutvarkyti tags

      // siusti duomenis su fetch
      // sendDataFetch(values)
      // jei sekmingai nusiuntem tai console log sekme
      // mes norim naviguoti i PostsPage su react-router is AddPostsPage
      // jei ne tai nesekme
    },
  });
  /*
   ^ reikalingi input
   ^ "image" text
   ^ "title" text
    ^"body" textarea
   ^ "reactions" number 0
    */
  //   console.log('formik.values ===', formik.values);
  //   console.log('formik.errors ===', formik.errors);
  // console.log('formik.touched ===', formik.touched);
  return (
    <div>
      <h2>Create post</h2>

      <form onSubmit={formik.handleSubmit} className='card'>
        <input
          className={
            formik.touched.image && formik.errors.image ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          placeholder='Image'
          name='image'
        />
        <InputError error={formik.errors.image} touch={formik.touched.image} />
        {/* sukurti InputError componenta kuris gaves props error, atvaizduos klaidos p taga */}
        {/* pvz <InputError error={formik.errors.image} /> */}
        <input
          className={
            formik.touched.title && formik.errors.title ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type='text'
          placeholder='Title'
          name='title'
        />
        {/* level2 error <InputError formik={formik} field={'title'} /> */}
        <InputError error={formik.errors.title} touch={formik.touched.title} />
        <textarea
          className={
            formik.touched.body && formik.errors.body ? 'inputErrorField' : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name='body'
          placeholder='Your text'
        ></textarea>
        {formik.touched && formik.errors.body && (
          <p className='inputErroMsg'>{formik.errors.body}</p>
        )}
        <input
          className={
            formik.touched.reactions && formik.errors.reactions
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reactions}
          type='number'
          placeholder='Reactions'
          name='reactions'
        />
        {formik.touched && formik.errors.reactions && (
          <p className='inputErroMsg'>{formik.errors.reactions}</p>
        )}
        <input
          className={
            formik.touched.tags && formik.errors.tags
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tags}
          type='number'
          name='tags'
          disabled
        />
        {formik.touched && formik.errors.userId && (
          <p className='inputErroMsg'>{formik.errors.userId}</p>
        )}
        <input
          className={
            formik.touched.userId && formik.errors.userId
              ? 'inputErrorField'
              : ''
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
          type='number'
          name='userId'
          disabled
        />
        {formik.touched && formik.errors.userId && (
          <p className='inputErroMsg'>{formik.errors.userId}</p>
        )}
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
export default AddPostForm;
