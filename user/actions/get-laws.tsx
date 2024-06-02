import { Laws } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/laws`;

export const revalidate = 0;
const getLaws = async (): Promise<Laws> => {
  const res = await fetch(URL);
  return res.json();
};

export default getLaws;
