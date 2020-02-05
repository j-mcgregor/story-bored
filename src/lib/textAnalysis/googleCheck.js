// Imports the Google Cloud client library.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Storage } = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
async function quickstart() {
  const storage = new Storage();

  try {
    // Makes an authenticated API request.
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}

quickstart().catch(console.error);
