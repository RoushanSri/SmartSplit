import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ItemDetail from "./ItemDetail";

const SplitItems = ({ item }) => {
return (
    <div className="w-full rounded-xl shadow-md bg-white py-4 px-3 mb-4 transition-all duration-200 hover:shadow-lg">
        <Accordion
            sx={{
                background: "transparent",
                boxShadow: "none",
                "&:before": { display: "none" },
            }}
            disableGutters
        >
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: "#6366f1" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    padding: 0,
                    minHeight: 0,
                    "& .MuiAccordionSummary-content": {
                        margin: 0,
                        alignItems: "center",
                    },
                }}
            >
                <div className="flex items-center justify-between w-full">
                    <Typography
                        component="span"
                        className="font-semibold text-lg text-gray-800 flex items-center"
                    >
                        {item.itemName}
                        {item.quantity > 1 && (
                            <span className="ml-2 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full">
                                x{item.quantity}
                            </span>
                        )}
                    </Typography>
                    <Typography className="text-indigo-600 font-bold text-base ml-4">
                        ₹{(item.itemPrice * item.quantity).toFixed(2)}
                    </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    background: "#f9fafb",
                    borderRadius: "0.5rem",
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                }}
            >
                <ItemDetail item={item} />
            </AccordionDetails>
        </Accordion>
    </div>
);
};

export default SplitItems;
