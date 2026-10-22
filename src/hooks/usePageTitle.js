import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Campus Club Finder`;
  }, [title]);
};

export default usePageTitle;
