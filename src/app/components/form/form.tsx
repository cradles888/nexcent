import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Button from "../StyleElements/button";
import React from "react";

interface MyForm {
  name: string;
  organization: string;
  email: string;
}

const Dropdown = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }
  const { register, handleSubmit, formState: { errors }} = useForm<MyForm>({
    defaultValues: {
      name: '',
      organization: '',
      email: ''
    }
  })

const submit: SubmitHandler<MyForm> = async (data) => {
    try {
      const response = await fetch('/api/endpoint-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Запрос не был доставлен');
      }

      const result = await response.json();
      console.log('Success:', result);
      onClose();
      alert("Данные отправлены. Ждите отклика")

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const error: SubmitErrorHandler<MyForm> = data => {
    console.log(error);
}
  return (
    <div
      id="modal_background"
      className=" fixed z-100 inset-0 flex justify-center items-center p-[2.1vw] bg-[rgba(0,0,0,0.14)] backdrop-blur-xs"
    >
      <div className="bg-white flex rounded-4xl  shadow-[0_0px_35px_rgba(0,0,0,0.05)]">
        <div
          id="modal"
          className="grid justify-items-center sm:flex md:flex lg:flex xl:flex 2xl:flex items-start py-[20vw] px-[25vw] sm:py-[7vw] sm:px-[17vw] md:py-[5vw] md:px-[16vw] lg:py-[6vw] lg:px-[16vw] xl:py-[8vw] 2xl:py-[6vw] gap-[5vw] sm:gap-[25vw]"
        >
          <img
            onClick={onClose}
            src="/images/close.png"
            id="header-close-menu"
            className="w-[clamp(36px,3.3vw,100px)] sm:absolute md:absolute lg:absolute xl:absolute 2xl:absolute  sm:ml-[45.5vw] md:ml-[38.5vw] lg:ml-[30.5vw] xl:ml-[25.5vw] 2xl:ml-[27.5vw] items-center"
          />
          <form onSubmit={handleSubmit(submit, error)} className="grid gap-[3vw] my-[3vw] sm:gap-[3vw] md:gap-[2vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] ">
            <input {...register('name', { required: true })} type="text" className={`border-2 outline-0 text-[clamp(18px,1.4vw,150px)] lg:py-[1.51vw] lg:pl-[1.75vw] pl-[1.75vw] py-[3vw] sm:pl-[1.75vw] md:pl-[1.75vw] xl:px-[1.75vw] 2xl:px-[1.75vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] rounded-md border-gray-300 ${errors.name ? "border-red-300" : ""}`}
              placeholder="Your name" aria-invalid={errors.name ? true : false}/>
              {errors.name ? <p className="text-red-500 font-semibold leading-0.5 text-[clamp(8px, 0.8vw, 100px)]"><i/>Поле содержит ошибку</p> : ""}
            <input {...register('organization', { required: true })} type="text" className={`border-2 outline-0 text-[clamp(18px,1.4vw,150px)] lg:py-[1.51vw] lg:pl-[1.75vw] pl-[1.75vw] py-[3vw] sm:pl-[1.75vw] md:pl-[1.75vw] xl:px-[1.75vw] 2xl:px-[1.75vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] rounded-md border-gray-300 ${errors.organization ? "border-red-300" : ""}`}
              placeholder="Your organization" aria-invalid={errors.name ? true : false}/>
                            {errors.organization ? <p className="text-red-500 font-semibold leading-0.5 text-[clamp(8px, 0.8vw, 100px)]"><i/>Поле содержит ошибку</p> : ""}
            <input {...register('email', { required: true })} type="email" className={`border-2 outline-0 text-[clamp(18px,1.4vw,150px)] lg:py-[1.51vw] lg:pl-[1.75vw] pl-[1.75vw] py-[3vw] sm:pl-[1.75vw] md:pl-[1.75vw] xl:px-[1.75vw] 2xl:px-[1.75vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] rounded-md border-gray-300 ${errors.email ? "border-red-300" : ""}`}
              placeholder="Your email"/>
                            {errors.email ? <p className="text-red-500 font-semibold leading-0.5 text-[clamp(8px, 0.8vw, 100px)]"><i/>Поле содержит ошибку</p> : ""}
              <Button label="Learn more" className="bg-[#4CAF4F] text-[clamp(18px,1.1vw,150px)] lg:py-[1.51vw] lg:px-[4vw] px-[10vw] py-[3vw] sm:px-[8vw] md:px-[6vw] xl:px-[1.67vw] 2xl:px-[1.67vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] text-slate-50 rounded-sm"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
