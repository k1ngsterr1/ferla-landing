"use client";

export function useSendQuoteEmail() {
  const onSubmit = async (data: any, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();

    // Prepare the data for the webhook
    const webhookUrl =
      "https://hook.us1.make.com/qsbnlvqeadfq4cbg3fql4l4iht259od3";
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const formData = data as unknown as Record<string, unknown>;

    const webhookResponse = await fetch(webhookUrl, postData);
  };

  return {
    onSubmit,
  };
}
