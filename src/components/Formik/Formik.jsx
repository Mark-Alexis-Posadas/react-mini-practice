import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Error } from "./components/Error";
export const FormikComponent = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-xl">Form vaildation using formik</h1>
      <Formik
        initialValues={{ email: "", gender: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.gender) {
            errors.gender = "required";
          }
          if (!values.password) {
            errors.password = "required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Field
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="email"
                type="text"
                component={Input}
                errors={errors}
              />
              <ErrorMessage name="email" component={Error} />
            </div>
            <div className="mb-3">
              <Field
                className="w-20"
                as="select"
                label="Gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                name="gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                component={Select}
                errors={errors}
              />

              <ErrorMessage name="gender" component={Error} />
            </div>
            <div className="mb-3">
              <Field
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                placeholder="password"
                type="password"
                component={Input}
                errors={errors}
                autoComplete="on"
              />

              <ErrorMessage name="password" component={Error} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
