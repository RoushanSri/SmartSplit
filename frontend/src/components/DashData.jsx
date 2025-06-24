import React from "react";
import { PiArrowFatLinesDownFill, PiArrowFatLinesUpFill } from "react-icons/pi";
import { FaCrown, FaPlus } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import avatar from "../assets/noImage.webp";
import { CardContent, Typography, Grid } from "@mui/material";

function DashData() {
  return (
    <>
      <h1 className="text-white pl-12 text-4xl font-semibold">
        Roushan Srivastav
      </h1>
      <div className="flex gap-24 justify-center items-center p-12 py-8">
        <div style={{ flex: 1 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className="bg-[#c2b2ec29] h-full text-white rounded-xl relative">
                <CardContent>
                  <Typography variant="h6">Total Split Amount</Typography>
                  <Typography variant="h4">₹1,234</Typography>
                </CardContent>
                <FaCrown
                  size={25}
                  color="gold"
                  className="absolute right-2 top-2"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className="bg-[#c2b2ec29] h-full text-white rounded-xl relative">
                <CardContent>
                  <Typography variant="h6">Amount Owed By You</Typography>
                  <Typography variant="h4" sx={{ color: "red" }}>
                    ₹87
                  </Typography>
                </CardContent>
                <PiArrowFatLinesDownFill
                  size={25}
                  color="red"
                  className="absolute right-2 top-2"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className="bg-[#c2b2ec29] h-full text-white rounded-xl relative">
                <CardContent>
                  <Typography variant="h6">Amount Owned to You</Typography>
                  <Typography variant="h4" sx={{ color: "lightgreen" }}>
                    ₹12,345
                  </Typography>
                </CardContent>

                <PiArrowFatLinesUpFill
                  size={25}
                  color="lightgreen"
                  className="absolute right-2 top-2"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <div className="bg-[#c2b2ec29] h-full text-white rounded-xl relative">
                <CardContent>
                  <Typography variant="h6">Past Members</Typography>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-8 h-8 border-2 border-[#010316]">
                      <img
                        src={avatar}
                        alt="avatar"
                        className="object-contain"
                      />
                    </div>
                    <div className="rounded-full overflow-hidden w-8 h-8 -ml-3 border-2 border-[#010316]">
                      <img
                        src={avatar}
                        alt="avatar"
                        className="object-contain"
                      />
                    </div>
                    <div className="rounded-full overflow-hidden w-8 h-8 -ml-3 border-2 border-[#010316]">
                      <img
                        src={avatar}
                        alt="avatar"
                        className="object-contain"
                      />
                    </div>
                    <FaPlus />
                  </div>
                </CardContent>
                <MdPeopleAlt
                  size={25}
                  color="orange"
                  className="absolute right-2 top-2"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default DashData;
