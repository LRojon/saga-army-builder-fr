import React from "react";
import { Box } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Unit, UnitDetails } from "../ArmyUnitTypes";
import { t, Translation } from "../helpers/translator";

const style = {
  /*position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",*/
  //width: 1000,
  bgcolor: "background.paper",
};

interface ArmyViewerInterface {
  units: { [key: string]: UnitDetails<Unit> };
}

const ArmyViewerDesktop: React.FC<ArmyViewerInterface> = ({ units }) => {
  return (
    <Box sx={style}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Unité</TableCell>
              <TableCell>Taille</TableCell>
              <TableCell>Options d'équipement</TableCell>
              <TableCell align="right">Armure CaC (Tir)</TableCell>
              <TableCell align="right">Agréssivité CaC (Tir)</TableCell>
              <TableCell align="right">Règles spécials</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(units).map((unit) => (
              <TableRow
                key={unit.equipmentOptions}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {t(unit.unit as Translation)}
                </TableCell>
                <TableCell align="right">{unit.unitSize}</TableCell>
                <TableCell align="right">{t(unit.equipmentOptions as Translation)}</TableCell>
                <TableCell align="right">{`${unit.armour.melee} (${unit.armour.shooting})`}</TableCell>
                <TableCell align="right">{`${unit.aggression.melee} (${unit.aggression.shooting})`}</TableCell>
                <TableCell align="right" width={250}>
                  {unit.specialRules.map((rule) => t(rule as Translation)).join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ArmyViewerDesktop;
