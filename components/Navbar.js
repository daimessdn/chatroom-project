import Link from "next/link";

const Navbar = ({isSignedIn}) => {
  const navStatus = isSignedIn ? (
    <div>
      <Link href="/"><a>Sign out</a></Link>
    </div>
  ) : (
    <div>
      <Link href="/signup"><a>Sign up</a></Link>
      <Link href="/signin"><a>Sign in</a></Link>
    </div>
  );

  console.log(isSignedIn);

	return (
    <nav>
      <h1>Chatroom</h1>

      {navStatus}
    </nav>
	)
}

export default Navbar;