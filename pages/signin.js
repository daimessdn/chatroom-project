import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/Form.module.css";

const Signin = () => {
  return (
    <div>
      <Navbar />
      
      <section>

        <h1>Sign in to Nextroom</h1>

        <form className="">
          <div className={styles.formField}>
            <label htmlFor="usename">Username</label>
            <input type="text" name="username" placeHolder="Username" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeHolder="Password" />
          </div>

          <div className={styles.formField}>
            <button>Sign in</button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default Signin;