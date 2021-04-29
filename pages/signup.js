import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/Form.module.css";

const Signup = () => {
  return (
    <div>
      <Navbar />

      <section>

        <h1>Sign up to Nextroom</h1>

        <form className="">
          <div className={styles.formField}>
            <label htmlFor="usename">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          <div className={styles.formField}>
            <button>Sign up</button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default Signup;