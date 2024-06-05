"use client";
import React from "react";
import Button from "@shared/ui/Button";
import { InputMobile } from "@shared/ui/InputMobile/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePickerInput } from "@shared/ui/DatePicker";

import styles from "../../PC/Form/styles.module.scss";

interface IData {
  name: string;
  phone: string;
  email: string;
  date: Date;
}

export const SubmitFormMobile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFunction = (data: any) => {
    console.log(data);
  };

  return (
    <>
      {" "}
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(submitFunction)}
      >
        <InputMobile
          labelText="Your Name"
          type="text"
          margin="mt-4"
          required
          {...register("name", { required: true, maxLength: 50 })}
        />
        {errors.name && <p className={styles.error}>Name is required!</p>}
        <InputMobile
          labelText="Phone Number"
          type="phone"
          margin="mt-14"
          required
          {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/ })}
        />
        {errors.phoneNumber && (
          <p className={styles.error}>Invalid phone number!</p>
        )}
        <InputMobile
          labelText="Email"
          type="email"
          margin="mt-14"
          required
          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {errors.email && <p className={styles.error}>Invalid email address!</p>}
        <DatePickerInput
          placeholder="Pick a Date"
          margin="mt-14"
          {...register("date", { required: true })}
        />
        {errors.date && <p className={styles.error}>Date is required!</p>}

        <Button
          text="Send Form"
          type="submit"
          buttonType="outlinemob"
          margin="mt-8"
        />
      </form>
    </>
  );
};
