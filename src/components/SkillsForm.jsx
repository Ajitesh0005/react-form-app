import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateSkills } from '../redux/formSlicer';
import { useNavigate } from 'react-router-dom';


export function SkillsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const skills = useSelector(state => state.form.skills);

  const formik = useFormik({
    initialValues: skills,
    validationSchema: yup.object({
      technicalSkills: yup.string().required('Required'),
      certifications: yup.string().required('Required')
    }),
    onSubmit: (values) => {
      dispatch(updateSkills(values));
      navigate('/additional-info');
    }
  });

  return (
    <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ alignContent: 'center', width: '800px', height: '500px', borderRadius: '20px' }}>
      <h3>Skills Information</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='mt-2 p-2'>
          <label>Technical Skills</label>
          <input type="text" name="technicalSkills" onChange={formik.handleChange} value={formik.values.technicalSkills} className='form-control' />
          {formik.errors.technicalSkills ? <div>{formik.errors.technicalSkills}</div> : null}
        </div>
        <div className='mt-2 p-2'>
          <label>Certifications</label>
          <input type="text" name="certifications" onChange={formik.handleChange} value={formik.values.certifications} className='form-control' />
          {formik.errors.certifications ? <div>{formik.errors.certifications}</div> : null}
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={() => navigate('/work-experience')} className='btn btn-primary me-2'>Back</button>
          <button type="submit" className='btn btn-primary'>Next</button>
        </div>
      </form>
    </div>
  )
}