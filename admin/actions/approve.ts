`use server`;
import axios from "axios";

const Approve = async (id: string, data: any) => {
  const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/report/${id}`;
  await axios.post(URL, data);
};

export default Approve;
