import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import Link from "next/link";

import DashboardShell from "../components/DashboardShell";
import Logo from "../components/Logo";
import { useAuth } from "../lib/auth";

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
          <Button onClick={() => auth.signoutFromGitHub()}>Signout</Button>
          </>
        ) : (
          <Button onClick={() => auth.signinWithGitHub()}>Log in</Button>
        )}

        <p>{auth.user?.email}</p>
      </Flex>
    </DashboardShell>
  );
}
