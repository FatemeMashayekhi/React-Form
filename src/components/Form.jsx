import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function FormValidation() {
  return (
    <div>
      <p className="mt-4 mr-12">اطلاعات فردی</p>
      <Formik
        initialValues={{
          code: "",
          name: "",
          id: "",
          birthDate: "",
          email: "",
          phoneNumber: "",
          address: "",
        }}
        validationSchema={Yup.object({
          code: Yup.number()
            .typeError("کد پرسنلی فقط میتواند شامل عدد باشد")
            .required("کد پرسنلی الزامی است")
            .positive("کد پرسنلی فقط میتواند شامل اعداد مثبت باشد")
            .integer("کد پرسنلی فقط میتواند شامل اعداد صحیح باشد"),
          name: Yup.string()
            .required("فیلد نام الزامی می باشد")
            .min(3, "نام ونام خانوادگی شما باید حداقل سه حرف باشد"),
          id: Yup.number("کد ملی فقط میتواند شامل عدد باشد")
            .required("کد ملی الزامی است")
            .min(1000000000, "کد ملی باید شامل ده رقم باشد")
            .max(9999999999, "کد ملی باید شامل ده رقم باشد"),
          birthDate: Yup.date()

            .required("تاریخ تولد الزامی است")
            .min(new Date(1900, 0, 1), "تاریخ تولد نمیتواند قبل از 1900 باشد")
            .max(new Date(), "تاریخ تولد نمیتواند در آینده باشد"),
          email: Yup.string()
            .matches(
              /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              "ایمیل وارد شده صحیح نمیباشد"
            )
            .required("فیلد ایمیل الزامی می باشد"),
          phoneNumber: Yup.string()
            .matches(
              /^(0|0098|\+98)?9[0-9]{9}$/,
              "شماره تماس وارد شده صحیح نمیباشد"
            )
            .required("فیلد شماره تماس الزامی می باشد"),
          address: Yup.string()
            .required("آدرس الزامی است")
            .min(10, "آدرس باید حداقل شامل ده حرف باشد"),
        })}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form className="grid grid-cols-3 gap-4 justify-center m-10">
            <Field
              id="code"
              name="code"
              placeholder="کد پرسنلی"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black placeholder:text-sm"
            />
            <Field
              id="name"
              name="name"
              placeholder="نام و نام خانوادگی"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black  placeholder:text-sm"
            />
            <Field
              id="id"
              name="id"
              placeholder="کد ملی"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black placeholder:text-sm"
            />
            <Field
              id="birthDate"
              name="birthDate"
              placeholder="تاریخ تولد"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black placeholder:text-sm"
              type="date"
            />
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="ایمیل"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black placeholder:text-sm"
            />
            <Field
              id="phoneNumber"
              name="phoneNumber"
              placeholder="شماره تلفن"
              className="border-2 p-3 rounded-xl outline-blue-800 placeholder-black placeholder:text-sm"
            />
            <Field
              id="address"
              name="address"
              component="textarea"
              placeholder="آدرس"
              className="border-2 p-3 rounded-xl outline-blue-800 col-span-2 placeholder-black placeholder:text-sm"
            />
            <div className="col-span-3 mt-4 flex flex-col gap-y-3">
              <span className="text-red-600">{errors.code}</span>
              <span className="text-red-600">{errors.name}</span>
              <span className="text-red-600">{errors.id}</span>
              <span className="text-red-600">{errors.birthDate}</span>
              <span className="text-red-600">{errors.email}</span>
              <span className="text-red-600">{errors.phoneNumber}</span>
              <span className="text-red-600">{errors.address}</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
