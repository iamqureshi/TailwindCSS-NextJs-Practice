import { NAV_LINKS } from "@/data";
import Link from "next/link";
import Button from "./Button";

const Appbar = () => {
  return (
    <div className="max-container relative py-4 flexBetween">
      <Link href={"/"}>
        <img src="/hilink-logo.svg" alt="" />
      </Link>
      <ul className="flexBetween">
        {NAV_LINKS.map((item) => (
          <Link
            className="hover:font-bold hover:cursor-pointer transition-all text-gray-50 hover:text-black text-lg px-6"
            href={item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="btn">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </div>
  );
};

export default Appbar;
