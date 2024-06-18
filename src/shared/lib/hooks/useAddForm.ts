import axios from "axios";

interface IData {
  name: string;
  phoneNumber: string;
  email: string;
  date: string;
}

export function useAddForm() {
  const addForm = async (data: IData): Promise<void> => {
    try {
      const updatedData = {
        ...data,
        code: "SPARK-STUDIO-85209af2e07011fafd442671ef8ae84b647be17c7f517ea5942075dda6fbeeb7",
      };

      const response = await axios.post(
        "https://ferla-backend-production.up.railway.app/api/forms/add",
        updatedData
      );
    } catch (error: any) {
      console.error("Failed to create data:", error);
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return { addForm };
}
