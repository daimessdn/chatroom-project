import Link from "next/link";

const Navbar = () => {
	return (
    <nav>
      <h1>Chatroom</h1>

      <Link href="/signup">
        <a>Sign up</a>
      </Link>

      <Link href="/signin">
        <a>Sign in</a>
      </Link>
    </nav>
	)
}

export default Navbar;