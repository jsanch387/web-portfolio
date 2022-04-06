import useProgessBarStyles from "./ProgressBar.style";

type ProgressBarProps = {
  complete: string;
  title: string
};

const ProgressBar = ({ complete, title }: ProgressBarProps) => {
  const classes = useProgessBarStyles();
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.fillContainer}>
          <div className={classes.filler} style={{ width: `${complete}%` }}>
            <span className={classes.label}>{complete}%</span>
          </div>
        </div>
        <hr className={classes.divider}/>
      </div>
    </>
  );
};

export default ProgressBar;
