// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import supabase from "@/libs/client";
import get from "./get";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // Process a GET request
    const getResponse = await get(req);
    res.status(200).json(getResponse);
  } else if (req.method === "POST") {
    // Process a POST request
  } else if (req.method === "UPDATE") {
    // Process a UPDATE request
  } else if (req.method === "DELETE") {
    // Process a DELETE request
  } else {
    // Handle any other HTTP method
  }
};

export default handler;
