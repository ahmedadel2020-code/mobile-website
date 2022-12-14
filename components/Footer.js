import { useEffect, useState } from "react";
import Image from "next/image";
import footerStyles from "../styles/Footer.module.css";
import Apple1 from "../asset/images/Apple1.svg";
import Apple2 from "../asset/images/Apple2.svg";
import Apple3 from "../asset/images/Apple3.svg";
import Apple4 from "../asset/images/Apple4.svg";
import GroupApple from "../asset/images/GroupApple.svg";

const Footer = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      <div className={footerStyles.company_info}>
        {windowSize.width > 450 ? (
          <div className={footerStyles.logos_wrapper}>
            <div>
              <Image src={Apple1} alt="apple 1" />
            </div>
            <div>
              <Image src={Apple2} alt="apple 2" />
            </div>
            <div>
              <Image src={Apple3} alt="apple 3" />
            </div>
            <div>
              <Image src={Apple4} alt="apple 4" />
            </div>
          </div>
        ) : (
          <div className={footerStyles.apple_group}>
            <Image src={GroupApple} alt="apple group" />
          </div>
        )}

        <p className={footerStyles.copyright}>
          Copyright &copy; 2022 - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
