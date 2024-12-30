import { useEffect } from "react";


function useDark(darkState: Boolean) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body == null) {
      throw new Error(
        "Critical error: <body> element is missing. Please contact technical support for assistance."
      );
    }
    if (darkState) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [darkState]);
}

export default useDark;
