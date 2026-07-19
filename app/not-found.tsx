import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#111a4c] px-6 text-center text-white"><div><p className="eyebrow text-[#f4e214]">404</p><h1 className="display mt-5 text-5xl">This path needs a little sunshine.</h1><Link href="/en" className="button mt-8 !border-[#f4e214] !bg-[#f4e214] !text-[#141d50]">Back home</Link></div></main>;
}
