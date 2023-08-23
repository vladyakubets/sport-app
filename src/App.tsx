import { Grid } from "@mui/material";
import Footer from "./components/Footer";
import LeftBar from "./components/LeftBar";
import MainSectionStatisticTable from "./components/MainSectionStatisticTable";
import RightBar from "./components/RightBar";
import { useSportList } from "./services/SportList";
import { AppMainSection, AppTopBar, Logo } from "./styles";

const logo = require("./logo.png");
export default function App() {
  useSportList();

  return (
    <>
      <AppTopBar>
        <Logo>
          <img src={logo} />
        </Logo>
      </AppTopBar>
      <AppMainSection>
        <Grid container>
          <Grid item xs={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={8}>
            <MainSectionStatisticTable />
          </Grid>
          <Grid item xs={2}>
            <RightBar />
          </Grid>
        </Grid>
      </AppMainSection>
      <Footer />
    </>
  );
}
