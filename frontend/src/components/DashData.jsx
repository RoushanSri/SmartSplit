import React, { useEffect, useState } from "react";
import { PiArrowFatLinesDownFill, PiArrowFatLinesUpFill } from "react-icons/pi";
import { FaCrown, FaPlus } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import avatar from "../assets/noImage.webp";
import { CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { motion, scale } from "framer-motion";

function DashData() {

  const { profile } = useSelector((state) => state.profile);

  const [profileData, setProfileData] = useState(profile);

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);

  return (
    <>
      <h1 className="text-white pl-12 text-4xl font-semibold">
        {profileData?.username}
      </h1>
      <div className="flex gap-24 justify-center items-center p-12 py-8">
        <div style={{ flex: 1 }}>
          <Grid container spacing={3}>
            <Grid size={{sx:12, sm:6, md:3}}>
              <motion.div
                className="bg-[#c2b2ec29] h-full text-white rounded-xl relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardContent>
                  <Typography variant="h6">Total Split Amount</Typography>
                  <Typography variant="h4">₹{profileData?.totalSplitAmount}</Typography>
                </CardContent>
                <FaCrown
                  size={25}
                  color="gold"
                  className="absolute right-2 top-2"
                />
              </motion.div>
            </Grid>
            <Grid size={{sx:12, sm:6, md:3}}>
              <motion.div
                className="bg-[#c2b2ec29] h-full text-white rounded-xl relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardContent>
                  <Typography variant="h6">Amount Owed By You</Typography>
                  <Typography variant="h4" sx={{ color: "red" }}>
                    ₹{profileData?.pendingOwedAmount}
                  </Typography>
                </CardContent>
                <PiArrowFatLinesDownFill
                  size={25}
                  color="red"
                  className="absolute right-2 top-2"
                />
              </motion.div>
            </Grid>
            <Grid size={{sx:12, sm:6, md:3}}>
              <motion.div
                className="bg-[#c2b2ec29] h-full text-white rounded-xl relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardContent>
                  <Typography variant="h6">Amount Owned to You</Typography>
                  <Typography variant="h4" sx={{ color: "lightgreen" }}>
                    ₹{profileData?.pendingOwnedAmount}
                  </Typography>
                </CardContent>
                <PiArrowFatLinesUpFill
                  size={25}
                  color="lightgreen"
                  className="absolute right-2 top-2"
                />
              </motion.div>
            </Grid>
            <Grid size={{sx:12, sm:6, md:3}}>
              <motion.div
                className="bg-[#c2b2ec29] h-full text-white rounded-xl relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
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
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default DashData;
