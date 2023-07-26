import logo from "../public/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full flex flex-col self-center justify-center text-center  snap-center items-center p-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-black bg-opacity-0 ">
      <a href="https://www.instagram.com/_brakewizard_/" target="__blank">
        <Image
          src={logo}
          width={90}
          height={90}
          alt="bRaker"
          placeholder="blur"
          className="rounded-full"
        />
      </a>

      <div>
        <h6 className="text-xs text-white">
          {" "}
          Made with &lt;3 by{" "}
          <a href="https://github.com/kushalsrinivas" target="__blank">
            <h6 className="underline hover:text-pink-600 text-white">Kushal</h6>
          </a>
        </h6>
      </div>
    </div>
  );
};
export default Footer;
