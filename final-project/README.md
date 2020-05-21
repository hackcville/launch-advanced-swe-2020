# Final Project

The idea for your final project is ultimately up to your group - I'm open to just about anything as long as it substantially incorporates the main areas we've covered during training. However, the following description is my suggestion for a project if your group would rather just follow along with this.

## Description

Design your own social media platform - think Facebook, Twitter or Instagram. All three of these platforms have varying differences and the exact features you choose to implement in your platform are up to you. Here are some things that would be nice to include for your users:

- The ability to post - your users need to share something! The contents of these posts can be up to you: text-focused like Twitter, image-focused like Instagram, or somewhere inbetween like Facebook.

- Social media is all about engagement, so let your users interact on posts! A commenting system or something similar would be a nice way to allow for discussion. Alternatively, you could take a "reply" approach like Twitter where comments are actually tweets themselves.

- Authentication is a must both for security and identity. Your app (and all assosciated infrastructure such as databases and APIs) should be fully secure. Additionally, it would be nice to allow your users to customize their identity beyond just an email and password.

There are hundreds of other features you could add to your platform - an online marketplace, direct messaging, groups / communities, a dating feature or anything else you can imagine. This model also works well for collaboration since team members can easily split off and work on their own sections.

## Tools

The actual tech stack for your project is also entirely up to you. You will most likely need some sort of database to hold user data - Cloud Firestore or PostgreSQL are great options for this (though you're welcome to use something else). You will also need to host your app somewhere - feel free to use any of the platforms we've discussed or any others you discover.

Here are some areas you may want to explore to implement certain features:

- [Firebase Cloud Storage](https://firebase.google.com/docs/storage) for handling image uploads or other data that isn't appropriate for Firestore.
- [Firebase Hosting](https://firebase.google.com/docs/hosting) is a great alternative to Netlify for static hosting if you'd like to keep everything contained on one platform (though they don't support automatic deployments out of the box)
- [Firebase Cloud Functions](https://firebase.google.com/docs/functions) is a [serverless](https://en.wikipedia.org/wiki/Serverless_computing) compute platform that you can use to run custom Node.js functions rather than hosting them on a dedicated platform like Heroku.
