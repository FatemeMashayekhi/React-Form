import { Formik, Form, Field } from "formik";

export default function FormValidation() {
  return (
    <div>
      <p className="mt-4 mr-12">اطلاعات فردی</p>
      <Formik>
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
          />
          <Field
            id="email"
            name="email"
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
        </Form>
      </Formik>
    </div>
  );
}
