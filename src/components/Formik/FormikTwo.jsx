import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Error } from "./components/Error";

const Schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),
});

export const FormikTwo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 text-center bg-white shadow-lg rounded-lg">
        <h1 className="font-bold text-3xl mb-5">
          Form Validation using Formik
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Schema}
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
            <form onSubmit={handleSubmit} className="w-[400px] m-auto p-5">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-left text-gray-700 mb-2"
                >
                  Email
                </label>
                <ErrorMessage name="email" component={Error} />
                <Field
                  className={`${
                    errors.email ? "border-red-500" : "border-gray-300 "
                  } mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="email"
                  type="text"
                  component={Input}
                  errors={errors}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-left text-gray-700 mb-2"
                >
                  Password
                </label>
                <Field
                  className={`${
                    errors.password ? "border-red-500" : "border-gray-300 "
                  } mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
