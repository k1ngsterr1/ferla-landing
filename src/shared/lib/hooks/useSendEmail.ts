"use client";
import emailjs from "@emailjs/browser";
import { IData } from "@widgets/HomePage/PC/SubmitForm";
import { useForm } from "react-hook-form";

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: IData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    const formData = data as unknown as Record<string, unknown>;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then((response) => {
        console.log("Email sent successfully", response.text);
      })
      .catch((error) => {
        console.error("Failed to send email", error.text);
      });
  };

  //   const onSubmit = async (data: any) => {
  //     try {
  //       const response = await emailjs.send(
  //         "service_j2x3a8g",
  //         "template_2l26rvq",
  //         data,
  //         "pdnZmc2F8nj777ZFR"
  //       );
  //       console.log("Email sent successfully", response.text);
  //     } catch (error) {
  //       console.error("Failed to send email", error);
  //     }
  //   };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isValid,
    control,
    setValue,
  };
}
