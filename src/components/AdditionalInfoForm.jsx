import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateAdditionalInfo } from '../redux/formSlicer';
import { useNavigate } from 'react-router-dom';


export function AdditionalInfoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const additionalInfo = useSelector(state => state.form.additionalInfo);

  const formik = useFormik({
    initialValues: additionalInfo,
    validationSchema: yup.object({
      coverLetter: yup.string().required('Required'),
      resume: yup.mixed().required('Required')
    }),
    onSubmit: (values) => {
      dispatch(updateAdditionalInfo(values));
      navigate('/review');
    }
  });

  return (
    <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ alignContent: 'center', width: '800px', height: '500px', borderRadius: '20px' }}>
      <h3>Additional Information</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='mt-2 p-2'>
          <label className='me-2 mb-2 p-2'>Cover Letter</label>
          <textarea name="coverLetter" onChange={formik.handleChange} value={formik.values.coverLetter} style={{ width: '600px', borderRadius: '12px' }} />
          {formik.errors.coverLetter ? <div>{formik.errors.coverLetter}</div> : null}
        </div>

        <div className='mt-2 p-2'>
          <label className='me-4'>Resume</label>
          <input type="file" name="resume" onChange={(e) => formik.setFieldValue('resume', e.currentTarget.files[0])} />
          {formik.errors.resume ? <div>{formik.errors.resume}</div> : null}
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={() => navigate('/skills')} className='btn btn-primary me-2'>Back</button>
          <button type="submit" className='btn btn-primary'>Next</button>
        </div>
      </form>
    </div>
  )
}

