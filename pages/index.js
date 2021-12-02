import Head from 'next/head'
import Image from 'next/image'
import CodeViewer from '../components/CodeViewer'
import Footer from '../components/Footer';
import Header from '../components/Header'
export default function Home() {
  const mockPrompt = `te sting
  multi
  line
  PROMPT
  hey this is a prompt
        trying tabs as well, why not
`;
  const mockCode = `def foobar():
    print("yo mama")
    
  #testin code now yolo`
  return (
    <>
      <Head>
        <title>aoc-browser</title>
        <meta name="description" content="Preston Carlton's submissions for Advent of Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <CodeViewer languages={['python','javascript']} prompt={mockPrompt} code={mockCode}/>
      </main>
      <Footer/>
    </>
  )
}
