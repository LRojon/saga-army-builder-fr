import { IconButton, useTheme } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import Divider from "@mui/material/Divider";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Divider sx={{ mt: "16px" }} />
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.default,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginRight: theme.spacing(1),
            }}
          >
            Vous avez trouver un bug ? Parlez m'en sur {" "}
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/Josephl83378898"
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </IconButton>
            ou si vous êtes un giga chad, ajoutez une issue sur {" "}
            <IconButton
              aria-label="GitHub"
              href="https://github.com/joe-lloyd/saga-army-builder/issues"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </IconButton>
            (repo de base du projet)
          </span>
        </div>
      </footer>
    </>
  );
};

export { Footer };
