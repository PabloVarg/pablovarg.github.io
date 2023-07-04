import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiCodeforces, SiCodewars, SiLeetcode } from "react-icons/si";
import Badge from "../Base/Badge";

function Footer() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center p-6 gap-10">
      <GithubBadge />
      <EmailBadge />
      <LinkedinBadge />
      <LeetCodeBadge />
      <CodeWarsBadge />
      <CodeForcesBadge />
    </div>
  );
}

function GithubBadge() {
  return (
    <Badge
      icon={<AiOutlineGithub className="text-yellow-light w-16 h-16" />}
      to="https://github.com/PabloVarg"
    />
  );
}

function EmailBadge() {
  return (
    <Badge
      icon={<MdEmail className="text-yellow-light w-16 h-16" />}
      to="emailto:pvarber@gmail.com"
    />
  );
}

function LinkedinBadge() {
  return (
    <Badge
      icon={<AiOutlineLinkedin className="text-yellow-light w-16 h-16" />}
      to="https://www.linkedin.com/in/pablo-vargas-3215a2224/"
    />
  );
}

function LeetCodeBadge() {
  return (
    <Badge
      icon={<SiLeetcode className="text-yellow-light w-16 h-16" />}
      to="https://leetcode.com/pvarber/"
    />
  );
}

function CodeWarsBadge() {
  return (
    <Badge
      icon={<SiCodewars className="text-yellow-light w-16 h-16" />}
      to="https://www.codewars.com/users/PabloVarg"
    />
  );
}

function CodeForcesBadge() {
  return (
    <Badge
      icon={<SiCodeforces className="text-yellow-light w-16 h-16" />}
      to="https://codeforces.com/profile/PabloVB"
    />
  );
}

export default Footer;
