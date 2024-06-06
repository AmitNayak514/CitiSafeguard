const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export const revalidate = 0;
const getPoints = async (id: string) => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getPoints;
