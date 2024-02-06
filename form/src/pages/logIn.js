import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useContext } from "react";
import { FormContext } from "@/context";

const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("UserName is required"),
  password: Yup.string().required("Password is required"),
});

export default function Home() {
     const { loading, setLoading } = useContext(FormContext);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    // Simulate API call for login
    setTimeout(() => {
      console.log("Logged in:", values);
      setLoading(false);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <main>
      <div className="bg-black grid w-full sm:w-full justify-items-center pt-[140px] pb-[150px]">
        <div className="text-gray-300 flex gap-2 pb-2">
          <h3>Don't have an account?</h3>
          <Link href="/">
            <p>Sign Up</p>
          </Link>
        </div>

        <h1 className="font-extrabold leading-snug pb-6">LOG IN</h1>

        <Formik
          initialValues={{ userName: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col pb-[32px]">
              <label htmlFor="userName" className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug">
                UserName
              </label>
              <Field
                type="text"
                id="userName"
                name="userName"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="UserName"
              />
              <ErrorMessage name="userName" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col pb-[32px]">
              <label htmlFor="password" className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="text-white font-bold ">
              <button
                type="submit"
                className="py-2.5 bg-[#9637eb] rounded-3xl  w-full"
                disabled={loading}
              >
                {loading ? "Logging" : "Log In"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
