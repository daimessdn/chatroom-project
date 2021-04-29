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

  const logoUrl = isSignedIn ? "/chat" : "/"

  console.log(isSignedIn);

	return (
    <nav>
      <Link href={logoUrl}>
        <a><h1>Nextroom</h1></a>
      </Link>

      {navStatus}
    </nav>
	)
}

export default Navbar;