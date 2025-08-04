
export function Navbar() {


    const links = [
        {
            href: "/",
            title: "Guide"
        },
        {
            href: "/",
            title: "Pricing"
        },
        {
            href: "/",
            title: "Login"
        }
    ];
  return (
    <div className="flex items-center justify-between py-4 px-4">
      <a href="/">
        {" "}
        <img src="/logo.svg" alt="Finta" />
      </a>
      <div className=" flex items-center gap-8 ">
      {links.map((link,index)=> <a href={link.href} key={index} className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200">{link.title}</a>)}
    <button type="button" className="bg-[#2579F4] px-4 py-2 shadow-lg text-shadow-md rounded-lg tracking-wide text-white font-bold">Start free trial</button>
      </div>
    </div>
  );
}
