import Head from "next/head";
import { IconContext } from "react-icons";

export const Layout = ({
  title = "nicklimmm.github.io",
  content = "nicklimmm.github.io",
  children,
}) => {
  return (
    <IconContext.Provider value={{ size: 40 }}>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={content} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <header className="bg-red-500">
          <Link href="#">
            <a>Lorem</a>
          </Link>
          <Link href="#">
            <a>Lorem2</a>
          </Link>
          <Link href="#">
            <a>Lorem3</a>
          </Link>
        </header> */}

        <main className="lg:px-24 px-12">{children}</main>

        <footer className="bg-gray-900 text-gray-100 py-8 text-center">
          Copyright &copy; 2022 Nicky Lim
        </footer>
      </div>
    </IconContext.Provider>
  );
};
