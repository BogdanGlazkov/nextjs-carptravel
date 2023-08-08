"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";
import { IFormData } from "@/types/interfaces";
import data from "@/data/form.json";

export default function Form() {
  const isBrowser = typeof window !== "undefined";
  const SESSION_KEY = "form";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    toast.success("Sent successfully!");
    reset();
  };

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });

  return (
    <>
      <form
        className="flex flex-col gap-[24px] md:gap-[20px] lg:gap-[42px] mdOnly:flex-row w-full lg:max-w-[608px] leading-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col lg:flex-row gap-[25px] md:gap-[28px] lg:gap-[20px] w-full mdOnly:w-[221px]">
          <label className="block w-full min-h-[80px] text-[12px] font-extralight tracking-[2.4px]">
            {data.fields.name}
            <input
              className="input"
              type="text"
              placeholder={data.placeholders.name}
              {...register("fullName", {
                required: data.errors.notEmpty,
                minLength: { value: 2, message: "2 characters minimum" },
                maxLength: {
                  value: 50,
                  message: "Too long (max 50 characters)",
                },
              })}
            />
            <span className="inputWarn">
              {errors["fullName"] ? errors["fullName"]?.message : null}
            </span>
          </label>

          <label className="block w-full min-h-[80px] text-[12px] font-extralight tracking-[2.4px]">
            {data.fields.email}
            <input
              className="input"
              type="email"
              placeholder={data.placeholders.email}
              {...register("email", {
                required: data.errors.notEmpty,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: data.errors.notValid,
                },
              })}
            />
            <span className="inputWarn">
              {errors["email"] ? errors["email"]?.message : null}
            </span>
          </label>
        </div>

        <div>
          <label className="block w-full text-[12px] leading-loose font-extralight tracking-[2.4px] mb-[16px] lg:mb-[24px]">
            {data.fields.message}
            <textarea
              className="input h-[193px] md:h-[221px] lg:h-[174px]"
              maxLength={200}
              cols={20}
              rows={8}
              {...register("message", {
                required: data.errors.notEmpty,
                minLength: {
                  value: 5,
                  message: "5 characters minimum",
                },
                maxLength: {
                  value: 200,
                  message: "Too long (max 200 characters)",
                },
              })}
            />
            <span className="inputWarn">
              {errors["message"] ? errors["message"]?.message : null}
            </span>
          </label>

          <div className="flex justify-end">
            <button
              className="text-[30px] lg:text-[32px] font-medium uppercase duration-300 hover:opacity-50 focus:opacity-50"
              type="submit"
            >
              {data.send}
            </button>
          </div>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
