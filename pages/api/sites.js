import { auth } from "../../lib/firabase-admin";
import { getUserSites, getSites } from "../../lib/db";

export default async function handler(req, res) {
  const {token} = req.headers;
  
  const {user_id} = await auth.verifyIdToken(token);
  const sites = await getUserSites(user_id);
  //const sites = await getSites();
  
  res.status(200).json(sites);
}
