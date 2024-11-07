import { FC } from "react";
import { motion } from "framer-motion";
import walterImage from "../../../assets/images/walter-main.jpg";

const Main: FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <motion.img
        alt="walter"
        src={walterImage}
        className="absolute left-0 z-[-1]"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          show: {
            opacity: 1,
            transition: { ease: [0, 0, 0.2, 1], duration: 1.3 },
          },
          hidden: {
            opacity: 0,
            transition: { ease: [0, 0, 0.2, 1], duration: 0.3 },
          },
        }}
      />
      <div className="container pt-[195px] pr-[87px] flex items-end flex-col">
        <motion.h2
          className="mb-30 pr-[26px] text-[72px] leading-[82px]"
          initial={{ fontSize: "8px" }}
          animate={{ fontSize: "72px" }}
          exit={{
            fontSize: "43px",
            translateY: "50px",
            translateX: "400px",
            opacity: 0,
          }}
        >
          Walter Hartwell White
        </motion.h2>
      </div>
    </div>
  );
};

export default Main;
