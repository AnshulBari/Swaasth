// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ed1c27308403514675179730bb902808@o4508854558523392.ingest.de.sentry.io/4508854562127952",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
