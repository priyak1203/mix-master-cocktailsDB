import axios from 'axios';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  return (
    <>
      <Form className="form" method="POST">
        <h4>our newsletter</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" id="name" className="form-input" />
        </div>
        {/* last name */}
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input"
            defaultValue="test@test.com"
          />
        </div>

        <button className="btn btn-block">submit</button>
      </Form>
    </>
  );
};

export default Newsletter;
