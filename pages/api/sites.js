import { getSites } from "../../lib/db";

export default async function handler(_, res) {
  const sites = await getSites()
  
  res.status(200).json(sites)
}
