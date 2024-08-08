import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateEducationInfo } from '../redux/formSlicer';
import { useNavigate } from 'react-router-dom';


export function EducationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const educationInfo = useSelector(state => state.form.educationInfo);

  const vESchema = yup.object({
    educationInfo: yup.array().of(
      yup.object({
        school: yup.string().required('School/College/Institute Name is required'),
        board: yup.string().required('Board/University is required'),
        cgpa: yup.string().required('CGPA is required'),
        year: yup.string().required('Passing Year is required')
      })
    )
  })

  return (
    <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ alignContent: 'center', width: '1100px', height: '600px', borderRadius: '20px' }}>
      <h3>Education Information</h3>
      <Formik
        initialValues={educationInfo}
        validationSchema={vESchema}
        onSubmit={(values) => {
          dispatch(updateEducationInfo(values.educationInfo));
          navigate('/work-experience');
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="educationInfo">
              {({ push, remove }) => (
                <div>
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>School/Institute</th>
                        <th>Board/University</th>
                        <th>CGPA</th>
                        <th>Passing Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (values.educationInfo || []).map((edu, index) => (
                          <tr key={index}>
                            <td>
                              <Field type="text" name={`educationInfo.${index}.school`} className='form-control' />
                              <ErrorMessage name={`educationInfo.${index}.school`} />
                            </td>
                            <td>
                              <Field type="text" name={`educationInfo.${index}.board`} className='form-control' />
                              <ErrorMessage name={`educationInfo.${index}.board`} />
                            </td>
                            <td>
                              <Field type="text" name={`educationInfo.${index}.cgpa`} className='form-control' />
                              <ErrorMessage name={`educationInfo.${index}.cgpa`} />
                            </td>
                            <td>
                              <Field type="text" name={`educationInfo.${index}.year`} className='form-control' />
                              <ErrorMessage name={`educationInfo.${index}.year`} />
                            </td>
                            <td>
                              <button type="button" onClick={() => remove(index)} className='btn btn-danger'><span className='bi bi-trash-fill'></span></button>
                            </td>
                          </tr>
                        ))
                      }
                      <tr>
                        <td>
                          <button type='button' onClick={() => push({ school: '', board: '', cgpa: '', year: '' })} className='btn btn-secondary'>
                            <span className='bi bi-file-plus-fill'></span>Add Education
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={() => navigate('/')} className='btn btn-primary me-2'>Back</button>
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