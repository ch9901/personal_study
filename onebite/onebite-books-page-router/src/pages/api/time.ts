import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const curTime = new Date().toLocaleDateString();
  res.status(200).json({ time: curTime });
}
