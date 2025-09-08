import { factions } from "../ArmyUnitTypes";
import React, { FC } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

type handleArmyType = (faction: typeof factions[number]) => void;

const ArmySelectorDropdown: FC<{
  handleSetArmy: handleArmyType;
  armyName?: typeof factions[number];
}> = ({ armyName, handleSetArmy }) => {
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
      <FormControl fullWidth>
        <InputLabel id="army-select-label">Armée</InputLabel>
        <Select
          labelId="army-select-label"
          id="army-select-select"
          value={armyName}
          label="Army"
          onChange={(event) =>
            handleSetArmy(event.target.value as typeof factions[number])
          }
        >
          {factions.map((faction) => (
            <MenuItem value={faction} key={faction}>
              {faction}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Selectionez votre armée</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default ArmySelectorDropdown;
