import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Register.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { register } from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const validationSchema = Yup.object().shape({
  fullName: Yup.string(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  event: Yup.string().required('Please select an option'),
});

const initialValues = {
  fullName: '',
  email: '',
  birthDate: null,
  event: '',
};

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    await register(id, values);
    setSubmitting(false);
    navigate(`/participants/${id}`);
  };
  return (
    <div>
      <h2>Event Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={css.form_wrapper}>
              <div className={css.input_wrapper}>
                <label htmlFor="fullName">Full name</label>
                <Field
                  className={css.input}
                  type="text"
                  name="fullName"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.input_wrapper}>
                <label htmlFor="email">Email</label>
                <Field
                  className={css.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>

              <label htmlFor="birthDate">Date of birth</label>
              <Field name="birthDate" className={css.input}>
                {({ field, form }) => (
                  <div className={css.input_date_wrapper}>
                    <DatePicker
                      className={css.input}
                      {...field}
                      selected={field.value}
                      onChange={(date) => {
                        const formattedDate = format(date, 'yyyy-MM-dd');
                        form.setFieldValue(field.name, formattedDate);
                      }}
                      placeholderText="Date of birth"
                      dateFormat="yyyy-MM-dd"
                      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
                    />
                  </div>
                )}
              </Field>

              <div className={css.radio_wrapper}>
                <label>What did you hear about this event?</label>
                <div role="group" aria-labelledby="radio-group">
                  <Field
                    type="radio"
                    name="event"
                    value="Social Media"
                    id="social_media"
                  />
                  <label htmlFor="social_media">Social Media</label>
                  <Field
                    type="radio"
                    name="event"
                    value="Friends"
                    id="friends"
                  />
                  <label htmlFor="friends">Friends</label>
                  <Field
                    type="radio"
                    name="event"
                    value="Found Myself"
                    id="found_myself"
                  />
                  <label htmlFor="found_myself">Found myself</label>
                </div>
                <ErrorMessage
                  name="eventSource"
                  component="div"
                  className={css.error}
                />
              </div>
              <button className={css.btn_submit} type="submit">
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
