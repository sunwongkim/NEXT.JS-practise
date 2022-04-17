import Link from "next/link";
import { useRouter } from "next/router";

// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      {/* public폴더 안의 파일은 다이렉트 접근 가능 */}
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          {/* router.pathname = 주소값 */}
          {/* <a className={router.pathname === "/" ? styles.active : ""}>Home</a> */}
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .active {
          /* booltype */
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
