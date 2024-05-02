export default function Navbar() {
  return (
    <div className="bg-black">
      <ul className="flex font-bold text-[30px] justify-end ">
        <li className="mr-6">
          <a href="/" className="cursor-pointer text-red-700 hover:text-white">
            HOME
          </a>
        </li>
        <li className="mr-6">
          <a
            href="/case-study"
            className="cursor-pointer text-red-700 hover:text-white"
          >
            CASE STUDY
          </a>
        </li>
        <li className="mr-6">
          <a
            href="/portfolio"
            className="cursor-pointer text-red-700 hover:text-white"
          >
            PORTFOLIO
          </a>
        </li>
        <li className="mr-6">
          <a
            href="/about-me"
            className="cursor-pointer text-red-700 hover:text-white"
          >
            ABOUT ME
          </a>
        </li>
        <li className="mr-6">
          <a
            href="/contacts"
            className="cursor-pointer text-red-700 hover:text-white"
          >
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  );
}
