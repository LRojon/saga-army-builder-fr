import React, { useEffect, useState } from "react";
import EventManager from "./helpers/EventManager";
import { Container, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { Providers } from "./components/Providers";
import { Hero } from "./components/Hero";
import { ArmySelectorForScreenSize } from "./components/ArmySelector";
import { ArmyUnitSelector } from "./components/ArmyUnitSelector";
import { ErrorSnackbar } from "./components/ErrorSnackbar";
import { SuccessSnackbar } from "./components/SuccessSnackbar";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { AppBarWithMenu } from "./components/AppBar";
import { Footer } from "./components/Footer";
import ArmyViewerDesktop from "./components/ArmyViewerDesktop";
import { combinedUnits } from "./helpers/combinedUnits";
import { UnitContext } from "./contexts/unitContext";
import { ArmyViewerForward } from "./components/ArmyViewer";

function App() {

  const theme = useTheme();
  const isScreenSizeLarge = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = React.useState(true);

  const unitContext = React.useContext(UnitContext);

  // State pour forcer le re-render
  const [refreshKey, setRefreshKey] = useState(false);
  // Calcul des unités à chaque render pour mise à jour temps réel
  let parsedUnits = combinedUnits(unitContext.units);

  useEffect(() => {
    const handler = () => {
      parsedUnits = combinedUnits(unitContext.units);
      setRefreshKey(k => !k);
    };
    EventManager.on("unitsChanged", handler);
    return () => EventManager.off("unitsChanged", handler);
  }, []);


  return (
    <Providers>
      <CssBaseline />
      <AppBarWithMenu />
      <Container
        maxWidth={false}
        sx={{
          p: { xs: "8px", sm: "16px" },
          width: "95%",
          height: "100%",
          alignItems: "space-between"
        }}
      >
        <Hero />
        <ArmySelectorForScreenSize />
        {isScreenSizeLarge ? (
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", justifyContent: "space-between", width: '100%' }}>
            <ArmyUnitSelector />
            <ArmyViewerForward key={refreshKey ? "refresh" : "static"} setOpen={setOpen} />
          </div>
        ) : (
          <div>
            <ArmyUnitSelector />
          </div>
        )}
        <Footer />
      </Container>
      <ErrorSnackbar />
      <SuccessSnackbar />
      <StickyBottomBar />
    </Providers>
  );
}

export default App;
