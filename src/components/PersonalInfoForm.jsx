import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo } from '../redux/formSlicer';
import { useNavigate } from 'react-router-dom';

export function PersonalInfoForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const personalInfo = useSelector(state => state.form.personalInfo)

    const formik = useFormik({
        initialValues: personalInfo,
        validationSchema: yup.object({
            name: yup.string().required('Name Required').min(4, 'Name too short'),
            email: yup.string().email('Invalid email address').required('Email Required'),
            phone: yup.string().matches(/\+91\d{10}/, "Invalid Mobile").required('Phone Number Required'),
            address: yup.string().required('Address Required'),
        }),
        onSubmit: (values) => {
            dispatch(updatePersonalInfo(values));
            navigate('/education');
        },
    });

    return (
        <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ borderRadius: '20px', width: '600px', height: '600px', alignContent: 'center' }}>
            <h3>Personal Information</h3>
            <form onSubmit={formik.handleSubmit} className='form-control'>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} className='form-control' /></dd>
                    {formik.errors.name ? <dd className="text-danger">{formik.errors.name}</dd> : null}
                    <dt>Email</dt>
                    <dd><input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className='form-control' /></dd>
                    {formik.errors.email ? <dd className="text-danger">{formik.errors.email}</dd> : null}
                    <dt>Phone</dt>
                    <dd><input type="text" name='phone' onChange={formik.handleChange} value={formik.values.phone} className='form-control' /></dd>
                    {formik.errors.phone ? <dd className="text-danger">{formik.errors.phone}</dd> : null}
                    <dt>Address</dt>
                    <dd><input type="text" name='address' onChange={formik.handleChange} value={formik.values.address} className='form-control' /></dd>
                    {formik.errors.address ? <dd className="text-danger">{formik.errors.address}</dd> : null}
                </dl>
                <button type='submit' className='btn btn-primary'>Next</button>
            </form>
        </div>
    );
};

