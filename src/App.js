import './App.css'
import { FaUser, FaPhoneSquare, FaEnvelope, FaKey } from 'react-icons/fa'
import { useFormik } from 'formik'
import { signUpSchema } from './schema'

const initialValues = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  Password: '',
  gender: '',
  terms: '',
}
const App = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      action.resetForm()
      console.log(values)
    },
  })

  return (
    <div className="conteiner">
      <form method="post" autoComplete="off" onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="firstName" className="float-left fontLabel">
            First Name
          </label>
          <div className="new iconBox">
            <FaUser />
          </div>
          <div className="float-right">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="textBox"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="errors">
          {errors.firstName && errors.firstName ? (
            <small>&nbsp;{errors.firstName}</small>
          ) : null}
        </div>
        <div className="box">
          <label htmlFor="secondName" className="float-left fontLabel">
            Last Name
          </label>
          <div className="float-left iconBox">
            <FaUser />
          </div>
          <div className="float-right">
            <input
              type="text"
              name="secondName"
              placeholder="Last Name"
              className="textBox"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.secondName}
            />
          </div>
        </div>
        <div className="errors">
          {errors.secondName && errors.secondName ? (
            <small>&nbsp;{errors.secondName}</small>
          ) : null}
        </div>

        <div className="box">
          <label htmlFor="phone" className="float-left fontLabel">
            Phone No
          </label>
          <div className="float-left iconBox">
            <FaPhoneSquare />
          </div>
          <div className="float-right">
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="textBox"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
          </div>
        </div>
        <div className="errors">
          {errors.phone && errors.phone ? (
            <small>&nbsp;{errors.phone}</small>
          ) : null}
        </div>

        <div className="box">
          <label htmlFor="email" className="float-left fontLabel">
            Email ID
          </label>
          <div className="float-left iconBox">
            <FaEnvelope />
          </div>
          <div className="float-right">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="textBox"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
        </div>
        <div className="errors">
          {errors.email && errors.email ? (
            <small>&nbsp;{errors.email}</small>
          ) : null}
        </div>

        <div className="box">
          <label htmlFor="password" className="float-left fontLabel">
            Password
          </label>
          <div className="float-left iconBox">
            <FaKey />
          </div>
          <div className="float-right">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="textBox"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Password}
            />
          </div>
        </div>
        <div className="errors">
          {errors.Password && errors.Password ? (
            <small>&nbsp;{errors.Password}</small>
          ) : null}
        </div>

        <div className="box radio">
          <label htmlFor="gender" className="float-left fontLabel">
            Gender:
          </label>
          <input
            type="radio"
            name="gender"
            defaultValue="Male"
            onChange={handleChange}
            checked={values.gender === 'Male'}
          />
          Male &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="radio"
            name="gender"
            defaultValue="Female"
            onChange={handleChange}
            checked={values.gender === 'Female'}
          />
          Female
        </div>
        <div className="errors">
          {errors.gender && errors.gender ? (
            <small>&nbsp;{errors.gender}</small>
          ) : null}
        </div>

        <div className="box terms">
          <input
            type="checkbox"
            name="terms"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.terms}
            checked={values.terms}
          />
          &nbsp; I accept the terms and conditions
          <div className="errors">
            {errors.terms && touched.terms ? (
              <small>&nbsp;{errors.terms}</small>
            ) : null}
          </div>
        </div>

        <div className="box submit">
          <button name="Submit" className="submit" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
