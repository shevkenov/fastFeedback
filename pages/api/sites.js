import db from "../../lib/firabase-admin";

export default async function handler(_, res) {
  try {
    const response = await db.collection("sites").get();
    const sites = response.docs.map(site => site.data())

    res.status(200).json(sites)
  } catch (error) {
    console.log(error)
  }
  
}
