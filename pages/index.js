import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import DashboardShell from "../compnents/DashboardShell";

import Logo from "../compnents/Logo";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <DashboardShell>
      <Flex as="main" direction="column" align="center" justify="center">
        <h1>Fast feedback</h1>

        <Logo boxSize="20" />

        {auth.user ? (
          <Button onClick={() => auth.signoutFromGitHub()}>Signout</Button>
        ) : (
          <Button onClick={() => auth.signinWithGitHub()}>Log in</Button>
        )}

        <p>{auth.user?.email}</p>
      </Flex>
    </DashboardShell>
  );
}
