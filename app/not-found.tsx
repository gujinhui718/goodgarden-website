import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-garden-900 px-6 text-center text-white"><div><p className="eyebrow text-gold-300">404</p><h1 className="display mt-4 text-5xl">This path needs a little sunshine.</h1><Link href="/en" className="button button-light mt-8">Back home</Link></div></main>;
}
