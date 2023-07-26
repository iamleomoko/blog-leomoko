const siteMetadata = {
  title: 'Leo Moko Blog',
  author: 'Leo Moko',
  headerTitle: 'Leo Moko',
  description: 'Sharing some of my opinions and thoughts ',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://leomoko.com/',
  siteRepo: 'https://github.com/iamleomoko/leomoko-blog-md',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hello@leomoko.com',
  github: 'https://github.com/iamleomoko',
  twitter: 'https://twitter.com/iamleomoko',
  facebook: 'https://www.facebook.com/iamleomoko',
  youtube: 'https://www.youtube.com/@iamleomoko',
  linkedin: 'https://www.linkedin.com/in/iamleomoko/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'mailchimp',
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'disqus', // supported providers: giscus, utterances, disqus
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
