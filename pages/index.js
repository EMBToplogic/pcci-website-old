import { API_ROUTE } from "../config";

// Components

import App from "../components/App";

export const getStaticProps = async (context) => {
  const res = await fetch(`${API_ROUTE}/announcements`);
  const news = await res.json();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news },
  };
};

export default (news) => <App {...news} />;
