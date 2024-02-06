import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import Link from "next/link";
import { FormContext } from "@/context";
import { useRouter } from "next/router";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/@/, "Must contain '@' symbol"),
  contact: Yup.number().required("Contact is required"),
  password: Yup.string().required("Password is required"),
});

export default function Home() {
  const { loading, setLoading } = useContext(FormContext);
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Make an HTTP POST request to your backend endpoint
      // Update the endpoint to match your backend route
      const response = await axios.post(
        "http://localhost:5001/users/register",
        values
      );

      // Handle the response as needed
      console.log("Response from server:", response.data);
      setLoading(true);

      router.push("/logIn");
      setSubmitting(false);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);

      // Reset form submission state
      setSubmitting(false);
    }
  };

  return (
    <main>
      <div className="bg-black grid w-full sm:w-full justify-items-center pt-[100px] pb-[150px]">
        <div className="text-gray-300 flex gap-2">
          <h3 className="">Already have an account?</h3>
          <Link href="/logIn">
            <p>LogIn</p>
          </Link>
        </div>

        <h1 className="font-extrabold leading-snug pb-6">SIGN UP</h1>

        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            contact: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Formik form fields go here */}
            <div className="flex flex-col pb-[32px]">
              <label
                htmlFor="name"
                className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug"
              >
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col pb-[32px]">
              <label
                htmlFor="name"
                className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug"
              >
                UserName
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="username"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col pb-[32px]">
              <label
                htmlFor="email"
                className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col pb-[32px]">
              <label
                htmlFor="password"
                className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col pb-[32px]">
              <label
                htmlFor="contact"
                className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug"
              >
                Contact
              </label>
              <Field
                type="number"
                id="contact"
                name="contact"
                className="border rounded-lg w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight"
                placeholder="contact"
              />
              <ErrorMessage
                name="contact"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="text-white font-bold">
              <button
                disabled={loading}
                type="submit"
                className="py-2.5 bg-[#9637eb] rounded-3xl  w-full"
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
