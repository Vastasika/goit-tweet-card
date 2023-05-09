import React from "react";
import { Hearts} from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
<Hearts 
  height="80"
  width="80"
  color="rgb(255, 238, 88)"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
};

export default Loader;