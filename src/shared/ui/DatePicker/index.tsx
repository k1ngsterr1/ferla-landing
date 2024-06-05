"use client";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

interface IDatePickerProps {
  placeholder: string;
  margin: string;
  date: Date | undefined;
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => void;
}

export const DatePickerInput: React.FC<IDatePickerProps> = ({
  placeholder,
  margin,
  date,
  onChange,
}) => {
  return (
    <DatePicker
      className={`${styles.input} ${margin} hoverable `}
      placeholderText={placeholder}
      selected={date}
      required
      name="date"
      onChange={onChange}
    />
  );
};
