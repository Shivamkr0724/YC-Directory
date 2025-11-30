// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // dsn: "https://631e39cf838ab638e4ea726cfb4ea322@o4510449046585344.ingest.de.sentry.io/4510449049862224",

  // // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // tracesSampleRate: 1,
   dsn: "https://631e39cf838ab638e4ea726cfb4ea322@o4510449046585344.ingest.de.sentry.io/4510449049862224",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});



// Sentry.init({
//   dsn: "https://631e39cf838ab638e4ea726cfb4ea322@o4510449046585344.ingest.de.sentry.io/4510449049862224",
//   integrations: [
//     Sentry.feedbackIntegration({
//       // Additional SDK configuration goes in here, for example:
//       colorScheme: "system",
//     }),
//   ],
// });
