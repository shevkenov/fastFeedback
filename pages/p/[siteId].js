import { Box } from "@chakra-ui/layout";
import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Feedback from "../../compnents/Feedback";
import { getFeedback, getSites } from "../../lib/db";

export async function getStaticProps(context) {
    const siteId = context.params.siteId;
    const allFeedbacks = await getFeedback(siteId);

    return {
        props: {
            allFeedbacks
        }
    }
}

export async function getStaticPaths() {
    const allSites = await getSites();
    const paths = allSites.map(site => {
        return {
            params: {
                siteId: site.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

const SiteFeedback = ({allFeedbacks}) => {
    console.log(router.query.siteId)
    return(
        <Box flexDirection="column" width="700px" m="0 auto">
            <FormControl id='comment'>
                <FormLabel>Comment</FormLabel>
                <Input type="string"/>
                <FormHelperText>Share your toughts</FormHelperText>
            </FormControl>
            {
                allFeedbacks.map(feedback => (
                    <Feedback key={feedback.id} {...feedback}/>
                ))
            }
        </Box>
    )
}

export default SiteFeedback;