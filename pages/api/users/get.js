import supabase from "@/libs/client";

const get = async (req) => {
  const { data, error } = await supabase.from("ideas").select();
  //   res.status(200).json(data);
  if (error) return error;

  return data;
};

export default get;
