import Head from "next/head";
import { IconContext } from "react-icons";

export const Layout = ({
  title = "Nicky Lim's Personal Website",
  content = "Nicky Lim's Personal Website",
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

        <main>{children}</main>

        <footer className="bg-gray-900 text-gray-100 py-8 text-center">
          Copyright &copy; {new Date().getFullYear()} Nicky Lim
        </footer>
      </div>
    </IconContext.Provider>
  );
};
