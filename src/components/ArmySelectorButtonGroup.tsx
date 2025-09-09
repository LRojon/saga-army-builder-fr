import React, { FC } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { factions } from "../ArmyUnitTypes";
import { ArmyContext } from "../contexts/armyContext";

type handleArmyType = (faction: typeof factions[number]) => void;

const ArmySelectorButtonGroup: FC<{ handleSetArmy: handleArmyType }> = ({
  handleSetArmy,
}) => {

  const { setArmy, armies, army } = React.useContext(ArmyContext);
  const [selectedArmy, setSelectedArmy] = React.useState(army?.name || "");

  React.useEffect(() => {
    setSelectedArmy(army?.name || "");
  }, [army]);

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <Typography gutterBottom>Choisissez votre faction</Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {factions.map((faction) => (
          <Button
            key={faction}
            onClick={() => handleSetArmy(faction)}
            color={faction === selectedArmy ? "success" : "primary"}
          >
            {faction}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ArmySelectorButtonGroup;
