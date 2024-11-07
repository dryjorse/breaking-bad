import { FC, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useScrollWatch } from "../../hooks/useScrollWatch";
import { scrollLevel } from "../../constants/data";
import Story from "../../components/mainPage/story/Story";
import Main from "../../components/mainPage/main/Main";
import BestMoments from "../../components/mainPage/bestMoments/BestMoments";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const MainPage: FC = () => {
  const scrollPosition = useScrollWatch();
  const [level, setLevel] = useState(1);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    scrollPosition < scrollLevel
      ? setLevel(1)
      : scrollPosition < scrollLevel * 2
      ? setLevel(2)
      : setLevel(3);
  }, [scrollPosition]);

  const levels = [
    { level: 1, component: <Main /> },
    { level: 2, component: <Story scrollDirection={scrollDirection} /> },
    { level: 3, component: <BestMoments /> },
  ];

  return (
    <>
      <div className="h-[calc(100vh+560px)]">
        {levels.map(({ level: currentLevel, component }) => (
          <AnimatePresence key={currentLevel}>
            {level === currentLevel && component}
          </AnimatePresence>
        ))}
      </div>
    </>
  );
};

export default MainPage;
