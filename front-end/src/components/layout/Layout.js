import { makeStyles } from "@material-ui/core";

// Layout Styles
const useStyle = makeStyles({
  layoutRoot: {
    margin: "3rem auto",
    width: "90%",
    maxWidth: "40rem",
    textAlign: "center",
  },
});

const Layout = props => {
  const classes = useStyle();
  return (
    <main className={`${props.className} ${classes.layoutRoot}`}>
      {props.children}
    </main>
  );
};

export default Layout;
