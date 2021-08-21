import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    border: "1px solid #02010112",
    borderBottom: 0,
    color: "#016DD4",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: 0,
  },
  details: {
    color: "#0e0e0e",
    fontWeight: "300",
    width: "90%",
    fontSize: 15,
    lineHeight: 1.5,
  },
}));

export const AccordionBox = ({ title, details }) => {
  const classes = useStyles();
  return (
    <div className="accordionContainer">
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#016DD4" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className={classes.heading}>{title}</span>
        </AccordionSummary>
        <AccordionDetails>
          <p className={classes.details}>{details}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
