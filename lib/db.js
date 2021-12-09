import db from './firabase-admin';

export async function getSites() {
    try {
        const response = await db.collection("sites").get();
        const sites = response.docs.map(site => ({id: site.id, ...site.data()}))
    
        return sites;
      } catch (error) {
        console.log(error)
      }
}

export async function getFeedback(siteId) {
    try {
        const response = await db.collection("feedbacks").where('siteId', '==', siteId).get();
        const feedback = response.docs.map(fback => ({id: fback.id, ...fback.data()}))
    
        return feedback;
    } catch (error) {
        console.log(error)
    }
}

export async function newFeedback(siteId) {
    try {
        console.log(siteId)
    } catch (error) {
        
    }
}