"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { DatePickerInput } from "@shared/ui/DatePicker";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";

import styles from "../../PC/Form/styles.module.scss";

export interface IData {
  name: string;
  phone: string;
  email: string;
  date: Date;
}

export const SubmitForm = () => {
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
      <form
        className={styles.form_section__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          labelText="Your Name"
          type="text"
          name="name"
          margin="mt-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          labelText="Phone Number"
          type="phone"
          name="phone"
          margin="mt-14"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          labelText="Email"
          type="email"
          name="email"
          margin="mt-14"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <Button
          text="Send Form"
          type="submit"
          buttonType="filled"
          margin="mt-8"
        />
      </form>
    </>
  );
};
