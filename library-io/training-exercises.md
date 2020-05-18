# Library Manager Additions

You've all made some pretty cool library managers! Let's make a few more addon features to help make it a fully usable app. As you complete tasks, shoot me a quick Slack update so I can know where you are.

For starters, if you haven't already, try implementing email and password authentication to secure your app from anyone on the public internet. The [Firebase auth docs](https://firebase.google.com/docs/auth/web/start) will be a great place to start. To make sure users can't access protected pages (like `/collection`), try referencing [this article](https://tylermcginnis.com/react-router-protected-routes-authentication/) on private routes.

Once you're done with that, try making per-user collections in Firestore. Rather than storing a single `books` collection at the top-level of your database that all users share, try creating user-specific collections instead. You will need a unique identifier for each user to keep track of their data.

Once you've done that, try securing your data - just because it's organized per-user doesn't mean malicious hackers can't read all collections. The [Firestore security docs](https://firebase.google.com/docs/firestore/security/overview) provide some excellent resources on app security. [This article from Fireship.io](https://fireship.io/snippets/firestore-rules-recipes/) also covers some convenient patterns when writing rules.

If you're all done with that (phew), try implementing public profile pages for all of your users. Collect data such as full name, bio and book preference and create dedicated pages for each user that shows their info. [React Router params](https://reacttraining.com/react-router/web/example/url-params) will be your friend here! Also don't forget about security rules - everyone can view profiles, but only the profile owner can make changes.

Some other loose tasks that you can try implementing:

- Email verification for new users (don't let them interact with your app until they've successfully verified)
- Custom profile pictures on each profile page (use [Firebase Storage](https://firebase.google.com/docs/storage/web/start) here)
- Allow for third-party authentication providers like Google. [This package](https://github.com/firebase/firebaseui-web-react) provides some very convenient auth styling for you.

If you're _really_ done with everything, Slack me and I'll let you know some additional tasks. There's still plenty to learn with Firebase :)
