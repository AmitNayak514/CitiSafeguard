`use server`;
import prismadb from "@/lib/prismadb";
import axios from "axios";

const Approve = async (id: string, data: any) => {
  const { userId } = data;
  console.log(userId);
  const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/report/${id}`;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/${userId}`
  );
  const points = await response.json();
  data = { ...data, userPoints: points };
  await axios.patch(URL, data);
};

export default Approve;
