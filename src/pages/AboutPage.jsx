import { Intro } from "../components/aboutPage/Intro";
import ShortcutComponent from "../components/aboutPage/ShortCutComponent";
import { useCards } from "../hooks/useCards";

export const AboutPage = () => {
  const { intro } = useCards();
  return (
    <>
      <Intro intro={intro} />

      {/*Instrucciones para agregar al celu */}
      <ShortcutComponent />
    </>
  );
};
