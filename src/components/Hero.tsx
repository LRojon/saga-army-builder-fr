import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { PointsContext } from "../contexts/pointsContext";

const Hero = () => {
  const { initialPoints, currentPoints, setInitialPoints } =
    React.useContext(PointsContext);

  return (
    <>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Saga: L'Âge de la Magie
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Créateur d'armée
        </Typography>
        <Card
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-initial-points"
              value={initialPoints}
              onChange={(event: any) => {
                setInitialPoints(parseInt(event.target.value) || 0);
              }}
              endAdornment={<InputAdornment position="end">pts</InputAdornment>}
              aria-describedby="full-points-helper-text"
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                "aria-labelledby": "full-points-helper-text",
              }}
            />
            <FormHelperText id="full-points-helper-text">
              Points Totaux
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <OutlinedInput
              id="points-remaining"
              value={currentPoints}
              endAdornment={<InputAdornment position="end">pts</InputAdornment>}
              aria-describedby="current-points-input"
              inputProps={{
                "aria-label": "current-points",
                "aria-labelledby": "current-points-helper-text",
              }}
              disabled
            />
            <FormHelperText id="current-points-helper-text">
              Points restants
            </FormHelperText>
          </FormControl>
        </Card>
      </Box>
    </>
  );
};

export { Hero };
