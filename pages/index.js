import { useRouter } from "next/router";
import Link from "next/link";
import Seo from "../components/Seo";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

// const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home({ results }) {
  const router = useRouter();

  // 아래 함수로 때문에 삭제
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  const onClick = (id) => {
    router.push(`/movies/${id}`);
  };

  console.log(results);

  return (
    <div className="container">
      <Seo title="home" />

      {results.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <a>
            <div className="movie" onClick={() => onclick(movie.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              {/* <img src={movies.poster_path} /> */}
              <h4>{movie.original_title}</h4>
            </div>
          </a>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
