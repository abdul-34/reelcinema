import PropTypes from "prop-types";
import { FOOTER_LINKS, SOCIALS } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 bg-black text-white py-16">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="hidden md:flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col items-center justify-center gap-5">
              <Link>Dubai Mall</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:items-start items-center justify-center  w-full md:w-1/3">
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      <img
                        src={link}
                        alt="social-icon"
                        className="w-5 h-5 bg-white"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Footer;
