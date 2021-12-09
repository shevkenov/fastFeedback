import { getFeedback } from "../../../lib/db";

export default async function handler(req, res) {
  const siteId = req.query.siteId;
  const feedback = await getFeedback(siteId);

  res.status(200).json(feedback);
}
