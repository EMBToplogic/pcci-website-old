import { API_ROUTE } from "../config";

// Components

import App from "./App";

App.displayName = "Philippine Chamber";

export const getServerSideProps = async (context) => {
  const res = await fetch(`${API_ROUTE}/announcements`);

  const news = await res.json();

  return {
    props: { news },
  };
};

export default (news) => <App {...news} />;
