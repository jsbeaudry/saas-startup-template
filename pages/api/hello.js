// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import supabase from "@/libs/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
  } else if (req.method === "POST") {
    // Process a POST request
  } else if (req.method === "UPDATE") {
    // Process a POST request
  } else if (req.method === "DELETE") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }

  const { data, error } = await supabase.from("users").select();
  console.log(data);
  res.status(200).json(data);
}
