import { FC } from "react";
import { motion } from "framer-motion";
import walterImage from "../../../assets/images/walter-story.png";
import { ScrollDirections } from "../../../types/clientTypes";

interface Props {
  scrollDirection: ScrollDirections;
}

const Story: FC<Props> = ({ scrollDirection }) => {
  console.log(scrollDirection);

  return (
    <div className="container fixed top-[155px] bottom-0 left-0 right-0 flex justify-between">
      <motion.div
        initial={
          scrollDirection === "down"
            ? { opacity: 0, translateX: "-200px" }
            : { translateY: "-100%" }
        }
        animate={
          scrollDirection === "down"
            ? { opacity: 1, translateX: "0px" }
            : { translateY: "0%" }
        }
        exit={
          scrollDirection == "down"
            ? { translateY: "-100%" }
            : { opacity: 0, translateX: "-200px" }
        }
        className="pt-[52px] flex-[0_1_490px]"
      >
        <h2 className="mb-30">
          <span className="text-green">S</span>tor
          <span className="text-green">Y</span>
        </h2>
        <div className="pr-90 max-h-[482px] overflow-y-scroll scroll *:mb-30">
          <p>
            The series was created and presented by Vince Gilligan His first
            television job was on The x files for which he wrote 29 episodes and
            co-produced over one hundred episodes. When starting a new project,
            Gilligan planned to create a series in which the protagonist becomes
            an antagonist as the plot develops. In accordance with this plan,
            the main character - Walter White - turns from an ordinary school
            teacher at the beginning of the story into a calculating criminal by
            its end. Before the series ended, Gilligan said that it was
            difficult to develop the character of Walter White because the
            character became increasingly darker and morally conflicted. He
            admitted that he will miss the series after filming ends, but at the
            same time will be relieved because he will no longer have to “keep
            Walt in my head.”
          </p>
          <p>
            The idea for a mobile laboratory, the basis for the series, arose
            from Vince Gilligan in a conversation with his friend writer Thomas
            Schnauz during a discussion of their current unemployment situation.
            Then, as a joke, it was proposed to equip a mobile meth laboratory
            with which one could travel around the country and earn money by
            selling drugs.
          </p>
        </div>
      </motion.div>
      <motion.img
        src={walterImage}
        initial={
          scrollDirection === "down"
            ? { opacity: 0, scale: 0.8 }
            : { translateY: "100%" }
        }
        animate={
          scrollDirection === "down"
            ? { opacity: 1, scale: 1 }
            : { translateY: "0%" }
        }
        exit={
          scrollDirection === "down"
            ? { translateY: "100%" }
            : { opacity: 0, scale: 0.8 }
        }
        className="origin-bottom-right"
        alt="walter-white"
      />
    </div>
  );
};

export default Story;
