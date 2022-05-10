/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
      },
      images: {
        domains: ['lh3.googleusercontent.com', 'image.tmdb.org'],
      },
    }
  }

  return {
    reactStrictMode: true,
    images: {
      domains: ['lh3.googleusercontent.com', 'image.tmdb.org'],
    },
    env: {
      API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
    },
  }
}
