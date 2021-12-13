import { Box } from "@chakra-ui/layout";
import { FormControl, Button, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Feedback from "../../components/Feedback";
import { getFeedback, getSites } from "../../lib/db";
import { useAuth } from "../../lib/auth";
import { useEffect, useRef, useState } from "react";
import { createFeedback } from '../../lib/firestore';
import parseISO from "date-fns/parseISO";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const allFeedbacks = await getFeedback(siteId);

  return {
    props: {
      allFeedbacks,
    },
  };
}

export async function getStaticPaths() {
  const allSites = await getSites();
  const paths = allSites.map((site) => {
    return {
      params: {
        siteId: site.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ allFeedbacks }) => {
  const auth = useAuth();
  const router = useRouter();
  const [allSiteFeedbacks, setAllSiteFeedbacks] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setAllSiteFeedbacks(allFeedbacks)
  }, [allFeedbacks])

  const submitFeedback = async (e) => {
    e.preventDefault();

    if(inputRef.current.value){
      const feedback = {
        author: auth.user.displayName,
        authorId: auth.user.uid,
        siteId: router.query.siteId,
        createdAt:  new Date().toISOString(),
        rating: 5,
        status: "pending",
        text: inputRef.current.value,
      };
  
      await createFeedback(feedback);
      setAllSiteFeedbacks(prev => [...prev, feedback].sort((a,b) => parseISO(b.createdAt) - parseISO(a.createdAt)));
    }

    inputRef.current.value = '';
  };

  return (
    <Box
      flexDirection="column"
      display="flex"
      width="full"
      maxWidth="700px"
      m="0 auto"
    >
      {auth.user && (
        <Box as="form" onSubmit={submitFeedback}>
          <FormControl id="comment" my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input ref={inputRef} type="string" placeholder="Leave comment" />
            <Button mt={4} type="submit">
              {" "}
              Add Comment
            </Button>
          </FormControl>
        </Box>
      )}
      {allSiteFeedbacks.map((feedback) => (
        <Feedback key={feedback.id || new Date().getTime().toString()} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;
