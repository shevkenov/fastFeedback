import { auth } from "../../lib/firabase-admin";
import { getUserFeedbacks } from '../../lib/db';

async function handler(req, res) {
    const { token } = req.headers;
    const { user_id } = await auth.verifyIdToken(token);
    const feedbacks = await getUserFeedbacks(user_id);

    return res.status(200).json(feedbacks);
}

export default handler;