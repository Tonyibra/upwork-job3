import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { StartIcon } from "./StartIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "18px 40px ",
    borderRadius: 0,
    backgroundColor: "#006DD4",
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 29,
    color: "#fff",
    height: 53,
  },
}));

export const PrimaryBtn = ({ title, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      startIcon={<StartIcon />}
      className={styles.root}
      variant="contained"
      color="primary"
    >
      {title}
    </Button>
  );
};
