
import Head from 'next/head';
import Dashboard from '../components/ui/dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stavební dashboard</title>
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  );
}
