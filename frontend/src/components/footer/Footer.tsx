import { FC } from "react";
import { motion } from "framer-motion";
import logoIcon from "../../assets/images/icons/logo-small.svg";
import arrowBottomIcon from "../../assets/images/icons/arrow-bottom.svg";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import divineArtIcon from "../../assets/images/icons/divine-art.svg";
import telegramIcon from "../../assets/images/icons/telegram.svg";
import { scrollLevel } from "../../constants/data";

const Footer: FC = () => {
  const onClickArrow = () => {
    window.scrollBy(0, scrollLevel);
  };

  return (
    <motion.footer
      initial={{ bottom: "-50px" }}
      animate={{ bottom: "40px" }}
      transition={{ ease: [0, 0, 0.2, 1], duration: 1, delay: 0.3 }}
      className="container fixed bottom-[40px] left-0 right-0 flex justify-between"
    >
      <div className="flex gap-[63px] items-center">
        <img src={logoIcon} alt="logo" />
        <span>I am the danger</span>
      </div>
      <div className="flex-[0_1_685px] flex justify-between items-end">
        <motion.button
          onClick={onClickArrow}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <img src={arrowBottomIcon} alt="arrow-bottom" />
        </motion.button>
        <span>Chemistry is not fucking pear</span>
        <div className="flex gap-[32px]">
          <a href="">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="">
            <img src={divineArtIcon} alt="divine-art" />
          </a>
          <a href="">
            <img src={telegramIcon} alt="telegram" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
