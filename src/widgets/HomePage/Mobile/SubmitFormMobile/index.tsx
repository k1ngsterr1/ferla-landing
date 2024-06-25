"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "@shared/ui/Button";
import { InputMobile } from "@shared/ui/InputMobile/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePickerInput } from "@shared/ui/DatePicker";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { FormPopup } from "@entities/FormPopup";

import styles from "../../PC/Form/styles.module.scss";

interface IData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const SubmitFormMobile = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { handleSubmit, onSubmit, setValue } = useSendEmail();

  useEffect(() => {
    setValue("name", name);
    setValue("phoneNumber", phone);
    setValue("email", email);
    setValue("message", message);
  }, [name, phone, email, message, setValue]);

  return (
    <>
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputMobile
          labelText="Your Name"
          type="text"
          name="name"
          margin="mt-8"
          value={name}
          isMobile
          required
          onChange={(e) => setName(e.target.value)}
          // {...register("name", { required: true, maxLength: 50 })}
        />
        {/* {errors.name && <p className={styles.error}>Name is required!</p>} */}
        <InputMobile
          labelText="Phone Number"
          type="phone"
          name="phone"
          margin="mt-12"
          required
          value={phone}
          isMobile
          onChange={(e) => setPhone(e.target.value)}
          // {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/ })}
        />
        {/* {errors.phoneNumber && (
          <p className={styles.error}>Invalid phone number!</p>
        )} */}
        <InputMobile
          labelText="Email"
          type="email"
          name="email"
          margin="mt-12"
          required
          value={email}
          isMobile
          onChange={(e) => setEmail(e.target.value)}
          // {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {/* {errors.email && <p className={styles.error}>Invalid email address!</p>} */}
        <InputMobile
          isMobile
          labelText="Write Your Message"
          type="text"
          name="message"
          // margin="mt-14"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* {errors.date && <p className={styles.error}>Date is required!</p>} */}
        <Button
          text="Send Form"
          type="submit"
          buttonType="outlinemob"
          margin="mt-8"
        />
        <FormPopup />
      </form>
    </>
  );
};
