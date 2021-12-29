import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import Link from "next/link";

import DashboardShell from "../components/DashboardShell";
import GitHubSVG from "../components/GitHubSVG";
import Logo from "../components/Logo";
import SigninButton from "../components/SigninButton";
import { useAuth } from "../lib/auth";
import GoogleSVG from "../components/GoogleSVG";

export default function Home() {
  const auth = useAuth();
  return (
    <DashboardShell>
      <Flex as="main" direction="column" align="center" justify="center">
        <h1>Fast feedback</h1>

        <Logo boxSize="20" />

        {auth.user ? (
          <>
          <Link passHref href="/dashboard"><Button onClick={() => {}}>Dashboard</Button></Link>
          <Button onClick={() => auth.signoutUser()}>Signout</Button>
          </>
        ) : (
          <VStack>
            <SigninButton 
              leftIcon={<GitHubSVG />} 
              onClick={() => auth.signinWithGitHub()}
              backgroundColor="gray.900"
              color="white"
              variant="outline"
              fontWeight="medium"
              size="lg"
              _hover={{bg: "gray.700"}}
              _active={{
                bg: "gray.800",
                transform: "scale(0.95)"
              }}
              >
                Singin with Github
            </SigninButton>
            <SigninButton 
              leftIcon={<GoogleSVG />} 
              onClick={() => auth.signinWithGoogle()}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              size="lg"
              _hover={{bg: "gray.100"}}
              _active={{
                bg: "gray.100",
                transform: "scale(0.95)"
              }}
              >
                Singin with Google
              </SigninButton>
          </VStack>
        )}

        <p>{auth.user?.email}</p>
      </Flex>
    </DashboardShell>
  );
}
