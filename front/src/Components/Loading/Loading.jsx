
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loading}>
      
      <p>. . . . LOADING. . . . </p>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loading;
