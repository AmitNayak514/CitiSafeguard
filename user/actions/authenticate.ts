import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";

const useAuthentication = async () => {
  const { user } = useUser();
  try {
    if (!user?.id) {
      redirect("/sign-in");
    }
    const data = {
      userId: user?.id,
      userName: user?.username,
    };
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, data);
  } catch (err) {
    console.log(err);
  }
};

export default useAuthentication;
