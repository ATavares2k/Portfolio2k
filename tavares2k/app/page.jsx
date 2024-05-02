import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>WELLCOME</h1>
      <p>Olá seja bem vindo</p>
      <br></br>
      <div>
        <Link href="/about-me">
          <button className="font-light text-[40px]">Sobre MIM</button>
        </Link>
        <br></br>
        <br></br>
        <Link href="/contacts">
          <button className="font-light text-[40px]">Contactos</button>
        </Link>
        <br></br>
        <br></br>
        <Link href="/about-me">
          <button className="font-light text-[40px]">SIGA</button>
        </Link>
      </div>
    </main>
  );
}
