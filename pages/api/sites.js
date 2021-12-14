import { auth } from '../../lib/firabase-admin';
import { getUserSites } from "../../lib/db";

export default async function handler(req, res) {
  const {token} = req.headers;
  
  const {user_id} = await auth.verifyIdToken(token);
  const sites = await getUserSites(user_id);
  
  res.status(200).json(sites);
}
