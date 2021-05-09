import { Card, makeStyles, Typography, CssBaseline } from "@material-ui/core";
import DropZone from "./components/DropZone";
import Layout from "./components/layout/Layout";

const useStyle = makeStyles(theme => {
  return {
    cardRoot: {
      margin: "3rem auto",
      padding: "2rem",
      borderRadius: "12px",
      textAlign: "center",
    },
  };
});

function App() {
  const classes = useStyle();
  return (
    <Layout>
      <CssBaseline />
      <Card elevation={0} className={classes.cardRoot}>
        <Typography
          color='primary'
          variant='h2'
          gutterBottom={true}
          align='center'
        >
          Cat or not
        </Typography>
        <DropZone />
      </Card>
    </Layout>
  );
}

export default App;
