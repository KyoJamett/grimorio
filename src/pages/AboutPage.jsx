import { Intro } from "../components/Intro";
import ShortcutComponent from "../components/ShortCutComponent";
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
