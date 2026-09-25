import Image from "next/image";
import Link from "next/link";
import s from "./Partners.module.css";

import nlpl from "@/../public/logos/nlpl-logo.png";
import nlplDark from "@/../public/logos/nlpl-logo-dark.png";
import helsinki from "@/../public/logos/helsinki-logo.png";
import helsinkiDark from "@/../public/logos/helsinki-dark.svg";
import csc from "@/../public/logos/csc.png";
import cscDark from "@/../public/logos/csc-dark.png";
import aka from "@/../public/logos/aka.svg";
import akaDark from "@/../public/logos/aka-dark.png";
import hplt from "@/../public/logos/hippo-logo.png";
import hpltDark from "@/../public/logos/Hippolyta-Logo-dark.svg";
import letsmt from "@/../public/logos/letsmt.png";
import letsmtDark from "@/../public/logos/lets-mt-dark.png";
import erc from "@/../public/logos/erc.png";
import ercDark from "@/../public/logos/erc-dark.png";
import kf from "@/../public/logos/kflogo.png";
import kfDark from "@/../public/logos/kflogo-dark.png";
import oellm from "@/../public/logos/oellm.svg";
import oellmDark from "@/../public/logos/oellm-dark.svg";

export default function Partners() {
  const items = [
    {
      id: 4,
      name: "University of Helsinki",
      logoClass: s.helsinkiLogo,
      light: helsinki,
      dark: helsinkiDark,
      url: "https://www.helsinki.fi/en",
    },
    {
      id: 1,
      name: "NLPL",
      logoClass: s.nlplLogo,
      light: nlpl,
      dark: nlplDark,
      url: "http://wiki.nlpl.eu/index.php/Home",
    },
    {
      id: 5,
      name: "CSC",
      logoClass: s.cscLogo,
      light: csc,
      dark: cscDark,
      url: "https://www.csc.fi/",
    },
    {
      id: 7,
      name: "Research Council of Finland",
      logoClass: s.akaLogo,
      light: aka,
      dark: akaDark,
      url: "https://www.aka.fi/en/",
    },
    {
      id: 10,
      name: "kulturfonden",
      logoClass: s.kulturfondenLogo,
      light: kf,
      dark: kfDark,
      url: "https://www.kulturfonden.fi/",
    },
    {
      id: 9,
      name: "ERC",
      logoClass: s.ercLogo,
      light: erc,
      dark: ercDark,
      url: "https://erc.europa.eu/homepage",
    },
    {
      id: 8,
      name: "LetsMT",
      logoClass: s.letsmtLogo,
      light: letsmt,
      dark: letsmtDark,
      url: "http://project.letsmt.eu",
    },
    {
      id: 6,
      name: "HPLT",
      logoClass: s.hpltLogo,
      light: hplt,
      dark: hpltDark,
      url: "https://hplt-project.org",
    },
    {
      id: 11,
      name: "OELLM",
      logoClass: s.oellmLogo,
      light: oellm,
      dark: oellmDark,
      url: "https://openeurollm.eu/",
    },
  ];

  return (
    <section className={s.wrap}>
      {items.map(({ id, name, logoClass, light, dark, url }) => (
        <Link
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          <Image
            data-hide-on-theme="dark"
            src={light}
            alt={name}
            width={120}
            className={`${s.logo} ${logoClass}`}
          />
          <Image
            data-hide-on-theme="light"
            src={dark}
            alt={name}
            width={120}
            className={`${s.logo} ${logoClass}`}
          />
        </Link>
      ))}
    </section>
  );
}
