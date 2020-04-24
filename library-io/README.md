# Library Manager

You are tasked with building out a personal library management platform using React, a Node.js backend, Firebase services and the Google Books API. These are your requirements:

- Users can search for books available on the [Google Books API](https://developers.google.com/books/docs/v1/getting_started) by various properties (title, author, etc). The request to Google to fetch books should happen within Node.js, not React.

- Users can add books to their personal collection using [Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart)

- Users can view their collection on a separate page (use [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for this!)

- Make it look good! You're welcome to use any combination of styling solutions we've discussed in the past: vanilla CSS, `style` props, Material-UI styling, styled-components or anything else you enjoy working with.

Additionally, here are some things that would be nice to implement if you have time (in order of estimated difficulty):

- Users can download their data as a JSON file for personal reference (so you can be [GDPR compliant!](https://howto.socialchorus.com/hc/en-us/articles/360005911014-Export-or-Forget-a-User-s-Data-GDPR-Compliance)).

- Users can log in to your site using [Firebase Authentication](https://firebase.google.com/docs/auth/web/start) and have their own personal collection (so no one can see their books!). This will require you to restructure how you store data within Firestore.

- Look into deploying your app onto Firebase (you will need [Firebase Hosting](https://firebase.google.com/docs/hosting) and [Cloud Functions](https://firebase.google.com/docs/functions)). We'll cover this during training, so don't worry about this requirement too much.

Please complete the required tasks by our first day of training, **Monday May 18th**. As always, I'm available via Slack or Zoom to help out with any issues you may run into.
