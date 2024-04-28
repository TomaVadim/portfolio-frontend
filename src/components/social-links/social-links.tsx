import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faGithub, faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

interface Link {
  href: string;
  icon: IconDefinition;
}

const links: Link[] = [
  {
    href: "https://www.linkedin.com/in/vadim-toma-046925247",
    icon: faLinkedin,
  },
  {
    href: "https://t.me/vadimtoma",
    icon: faTelegram,
  },
  {
    href: "https://github.com/TomaVadim",
    icon: faGithub,
  },
  {
    href: "https://www.instagram.com/_vadim_toma_",
    icon: faInstagram,
  },
];

export const SocialLinks = (): JSX.Element => {
  return (
    <ul className="mb-5 flex items-center gap-10">
      {links.map(({ href, icon }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-dark w-8 hover:text-primary transition-colors duration-200" icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
