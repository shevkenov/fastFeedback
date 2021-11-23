import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div >
      <main >
        <h1 >Fast feedback</h1>

        <p >
          Get started by editing{" "}
          <code >pages/index.js</code>
        </p>

        <div>
          <button onClick={() => auth.signinWithGitHub()}>Log in</button>
        </div>
        <p>{auth.user?.email}</p>
        <div>
          <button onClick={() => auth.signoutFromGitHub()}>Signout</button>
        </div>
      </main>

    </div>
  );
}
