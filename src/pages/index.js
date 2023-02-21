import Head from 'next/head'
import Image from 'next/image'
import homePic from '../../public/Landing_page_pic.JPG'

export default function Home() {
  return (
    <div className="grid grid-rows-3 grid-cols-3">
      <div className="static flex h-screen justify-center col-span-2 space-y-24">
        <h1 className="font-light text-neutral-200 text-8xl tracking-wide mr-24 mt-48">
          Jason Botesazan
        </h1>
        <div className="absolute">
          <h2 className="font-extralight text-green-300 text-4xl ml-48 mt-48">
            Full-Stack Software Engineer
          </h2>
        </div>
        <div className="absolute">
          <p className="font-extralight text-neutral-200 text-2xl tracking-wider text-left w-1/2 ml-56 mt-80">
            Howdy, I’m Jason Botesazan. A New York based Web Developer
            looking to land my first gig as a Software Engineer!
            Coding aside, my passion lies in traveling, experiencing
            new cultures, eating good food, and most important of all,
            consuming great coffee!
          </p>
        </div>
      </div>
      <Image
        src={homePic}
        alt="Picture of the Author"
        // width={663}
        height={969}
        className="absolute inset-y-0 right-0"
      />
    </div>
  );
}

      {
        /* <Head>
        <title>Jason Botesazan's Portfolio</title> //Title in the tab
        <link rel="icon" href="/favicon.ico" /> //For when we want to include a custom Logo
      </Head> */
      }