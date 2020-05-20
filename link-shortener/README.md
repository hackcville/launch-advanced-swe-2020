# Link Shortener

Build a URL shortener service similar to [is.gd](https://is.gd/) or [bit.ly](https://bitly.com/). The app should be made with a React frontend, a Node + Express backend and a PostgreSQL database.

## Expectations:

Users can...

- Go to the site and fill out a form to submit new URLs to shorten (by default with randomized IDs)
- Enter custom IDs for their links as long as they're not taken
- Visit their shortened links and be redirected to the original URL entered

## Nice to have features:

- Link info endpoint (such as `/api/info`) where users can find stats on links
- Track the number of times a link has been visited
- User friendly POST API endpoint where users can programmatically send in new links
