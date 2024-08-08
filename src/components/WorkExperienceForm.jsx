import { FieldArray, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkExperience } from '../redux/formSlicer';
import { useNavigate } from 'react-router-dom';


export function WorkExperienceForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const workExperience = useSelector(state => state.form.workExperience);

  const vWSchema = yup.object({
    workExperience: yup.array().of(
      yup.object({
        company: yup.string().required('Company Name Required'),
        title: yup.string().required('Title Required'),
        duration: yup.string().required('Duration Required')
      })
    )
  })

  return (
    <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ alignContent: 'center', width: '1100px', height: '600px', borderRadius: '20px' }}>
      <h3>Work Experience Information</h3>
      <Formik
        initialValues={workExperience}
        validationSchema={vWSchema}
        onSubmit={(values) => {
          dispatch(updateWorkExperience(values.workExperience))
          navigate('/skills');
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name='workExperience'>
              {({ push, remove }) => (
                <div>
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (values.workExperience || []).map((work, index) => (
                          <tr key={index}>
                            <td>
                              <Field type='text' name={`workExperience.${index}.company`} className='form-control' />
                              <ErrorMessage name={`workExperience.${index}.company`} />
                            </td>
                            <td>
                              <Field type='text' name={`workExperience.${index}.title`} className='form-control' />
                              <ErrorMessage name={`workExperience.${index}.title`} />
                            </td>
                            <td>
                              <Field type='text' name={`workExperience.${index}.duration`} className='form-control' />
                              <ErrorMessage name={`workExperience.${index}.duration`} />
                            </td>
                            <td>
                              <button type="button" onClick={() => remove(index)} className='btn btn-danger'><span className='bi bi-trash-fill'></span></button>
                            </td>
                          </tr>
                        ))
                      }
                      <tr>
                        <td>
                          <button type='button' onClick={() => push({ company: '', title: '', duration: '' })} className='btn btn-secondary'>
                            <span className='bi bi-file-plus-fill'></span> Add Experience</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={() => navigate('/education')} className='btn btn-primary me-2'>Back</button>
                    <button type="submit" className='btn btn-primary'>Next</button>
                  </div>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  )
}
