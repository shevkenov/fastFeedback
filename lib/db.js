import { parseISO } from 'date-fns';
import { db } from './firabase-admin';

export async function getSites() {
    try {
        const response = await db.collection("sites").get();
        const sites = response.docs.map(site => ({id: site.id, ...site.data()}))
    
        return sites;
      } catch (error) {
        console.log(error)
      }
}

export async function getUserSites(uid) {
    try {
        const response = await db.collection("sites").where("authorId", '==', uid).get();
        const sites = response.docs.map(site => ({id: site.id, ...site.data()}))
    
        return sites;
      } catch (error) {
        console.log(error)
      }
}

export async function getFeedback(siteId) {
    try {
        const response = await db.collection("feedbacks").where('siteId', '==', siteId).get();
        const feedback = response.docs.map(fback => ({id: fback.id, ...fback.data()}));

        return feedback.sort((a,b) => parseISO(b.createdAt) - parseISO(a.createdAt));
    } catch (error) {
        console.log(error)
    }
}