import { useActiveSectionContext } from "./Active";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { sectionname } from "./type";

export function useSectionInView(sectionName: sectionname, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return {
    ref,
  };
}
