"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "@shared/ui/Button";
import { InputMobile } from "@shared/ui/InputMobile/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePickerInput } from "@shared/ui/DatePicker";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";

import styles from "../../PC/Form/styles.module.scss";

interface IData {
  name: string;
  phone: string;
  email: string;
  date: Date;
}

export const SubmitFormMobile = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<any>();

  const { handleSubmit, onSubmit, setValue } = useSendEmail();

  useEffect(() => {
    setValue("name", name);
    setValue("phone", phone);
    setValue("email", email);
    setValue("date", date);
  }, [name, phone, email, date, setValue]);

  return (
    <>
      {" "}
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputMobile
          labelText="Your Name"
          type="text"
          margin="mt-4"
          required
          // {...register("name", { required: true, maxLength: 50 })}
        />
        {/* {errors.name && <p className={styles.error}>Name is required!</p>} */}
        <InputMobile
          labelText="Phone Number"
          type="phone"
          margin="mt-14"
          required
          // {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/ })}
        />
        {/* {errors.phoneNumber && (
          <p className={styles.error}>Invalid phone number!</p>
        )} */}
        <InputMobile
          labelText="Email"
          type="email"
          margin="mt-14"
          required
          // {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {/* {errors.email && <p className={styles.error}>Invalid email address!</p>} */}
        <DatePickerInput
          placeholder="Pick a Date"
          margin="mt-14"
          date={date}
          onChange={(
            selectedDate: Date | null,
            event: React.SyntheticEvent<any, Event> | undefined
          ) => {
            if (selectedDate) {
              setDate(selectedDate.toISOString());
            } else {
              setDate("");
            }
          }}
        />
        {/* {errors.date && <p className={styles.error}>Date is required!</p>} */}

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
