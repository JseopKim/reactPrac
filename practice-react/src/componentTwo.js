import {useEffect, useRef} from "react";

function Two() {
  let section = useRef(null);
  let num = 2;

  useEffect(() => {
    if(section.current) {
      section.current.style.backgroundColor = "#addadd";
    }

  }, [])

  return (
    <div ref={section}>
      component{num}
    </div>
  )
}

export default Two;