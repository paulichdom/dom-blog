import PostGrid, { Post } from '@/components/Posts/PostGrid';
import Profile from '@/components/Profile/Profile';
import Head from 'next/head';
import styled from 'styled-components';

const posts: Post[] = [
  {
    title: 'Regular Exercise Reduces Risk of Chronic Diseases',
    slug: 'regular-exercise-reduces-risk-of-chronic-diseases',
    date: '2023-04-09T16:23:45.678Z',
    excerpt:
      'Engaging in regular exercise for at least 30 minutes a day, five days a week can significantly lower the risk of chronic diseases such as heart disease, diabetes, and stroke, according to a 10-year study of over 10,000 participants. The type of exercise did not matter as much as the frequency and duration, suggesting even light or moderate exercise can have significant health benefits.',
  },
  {
    title: 'Daily Meditation Reduces Stress Levels',
    slug: 'daily-meditation-may-reduce-stress-levels',
    date: '2023-04-09T16:23:45.678Z',
    excerpt:
      'A study has found that engaging in daily meditation can significantly reduce stress levels. Participants who meditated for at least 10 minutes a day reported feeling less stressed and anxious than those who did not meditate regularly.',
  },
  {
    title: 'Plant-Based Diet Lowers Risk of Heart Disease',
    slug: 'plant-based-diet-may-lower-risk-of-heart-disease',
    date: '2023-04-09T16:23:45.678Z',
    excerpt:
      'Research suggests that following a plant-based diet can lower the risk of heart disease. A study of over 5,000 participants found that those who consumed a predominantly plant-based diet had lower levels of cholesterol and blood pressure, both of which are risk factors for heart disease.',
  },
  {
    title: 'Yoga Improves Flexibility and Balance',
    slug: 'yoga-improves-flexibility-and-balance',
    date: '2023-04-09T16:23:45.678Z',
    excerpt:
      'A recent study has found that regular yoga practice can improve flexibility and balance. Participants who attended yoga classes twice a week for 12 weeks showed significant improvement in their flexibility and balance compared to those who did not practice yoga.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Domagoj Paulic</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Profile /> */}
      <PostGrid posts={posts} />
    </>
  );
}
