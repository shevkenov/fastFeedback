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

export async function getUserFeedbacks(userId) {
  try {
    const response = await db.collection("feedbacks").where('authorId', '==', userId).get();
    const sites = await getUserSites(userId);
    const feedbacks = response.docs.map((fback) => {
      const { name } = sites.find(s => s.id === fback.data().siteId)
      
      return {id: fback.id, siteName: name, ...fback.data()}
    });

    return feedbacks.sort((a,b) => parseISO(b.createdAt) - parseISO(a.createdAt)); 
  } catch (error) {
    console.log(error)
  }
}