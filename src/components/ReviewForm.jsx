import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ReviewForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector(state => state.form);

  function handleSubmit() {
    alert('Application Submitted');
    dispatch({ type: 'RESET_FORM' })
    navigate('/');
  };

  return (
    <div className='p-2 text-bg-dark container-fluid justify-content-center align-items-center' style={{ alignContent: 'center', width: '900px', borderRadius: '20px' }}>
      <h3>Review Your Application</h3>
      <pre className="ms-4 p-2">{JSON.stringify(formData, null, 2)}</pre>
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={() => navigate('/additional-info')} className="btn btn-outline-light me-2 p-2">Edit</button>
        <button onClick={handleSubmit} className="btn btn-outline-light">Submit</button>
      </div>
    </div>
  )
}
