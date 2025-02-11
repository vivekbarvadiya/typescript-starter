import { NextApiRequest, NextApiResponse } from "next";

interface User {
  name: string;
  id: number;
}

const user: User[] = [
  { id: 1, name: "vivek" },
  { id: 2, name: "vivek2" },
  { id: 3, name: "vivek3" },
  { id: 4, name: "vivek4" },
  { id: 5, name: "vivek5" },
  { id: 6, name: "vivek6" },
  { id: 7, name: "vivek7" },
];

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(user);
  } else if (req.method === "POST") {
    try {
      const data = req.body;

      // (!data.name){
      //   return res.status(404).json("data not found");
      // }

      const newUser: User = { id: user.length + 1, name: data.name };
      user.push(data);
      return res.status(200).json({ newUser, user });
    } catch (error) {
      return res.status(500).json({ message: "request not found" });
    }
  } else {
    return res.status(500).json({ message: "request not found" });
  }
}

export default handler;
