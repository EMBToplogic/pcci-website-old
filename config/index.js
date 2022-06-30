const dev = process.env.NODE_ENV !== "production";

// export const API_ROUTE = dev ? "http://localhost:3000" : "http://webkit.toplogic.com.ph:4330";

export const API_ROUTE = dev
  ? "https://cloudkit.toplogic.com.ph:9030"
  : "https://cloudkit.toplogic.com.ph:9030";
