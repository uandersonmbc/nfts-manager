import type { NextPage } from "next";
import Link from "next/link";

const ActiveLink = ({ children, href, className }: any) => {
  return (
    <Link href={href} scroll={false}>
      <a>{children}</a>
    </Link>
  );
};

const SimulatorPage: NextPage = () => {
  return (
    <div>
      <ActiveLink href="/">Basic Information</ActiveLink>
    </div>
  );
};

export default SimulatorPage;
