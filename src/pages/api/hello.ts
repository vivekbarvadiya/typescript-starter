import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "TypeScript" });
  } else if (req.method === "POST") {
    return res.status(200).json({ message: "TypeScript" });
  }
}
