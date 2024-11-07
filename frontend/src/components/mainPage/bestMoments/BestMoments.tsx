import { FC } from "react";
import { motion } from "framer-motion";

const BestMoments: FC = () => {
  return (
    <div className="container fixed top-[0px] bottom-0 left-0 right-0 ">
      <motion.div
        initial={{ opacity: 0, translateX: "-200px" }}
        animate={{ opacity: 1, translateX: "0px" }}
        className="pt-[231px]"
      >
        <h2>
          <span className="text-green">Best</span> Moments
        </h2>
        <h3 className="mt-90 leading-[82px] text-[72px]">
          Killing Krazy 8 Scene{" "}
        </h3>
        <p className="max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur. Urna sit tempus risus diam
          dignissim convallis malesuada. Nec turpis congue sed nisl posuere est
          consectetur. Suscipit tempor sagittis mattis scelerisque augue platea
          mauris. Consectetur senectus urna nisl sapien volutpat. Augue semper
          ac elit rutrum eu auctor felis non rhoncus.
        </p>
      </motion.div>
    </div>
  );
};

export default BestMoments;
