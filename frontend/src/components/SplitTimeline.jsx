import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FaCheck } from "react-icons/fa";
import Typography from '@mui/material/Typography';
import { FaRegClock } from "react-icons/fa6";
import { IoCreateSharp } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';

const SplitTimeline = ({splitStatus}) => {

  const [completed, setCompleted] = useState("#E4E0E1");
  const [cText, setCText] = useState("#9AA6B2");

  useEffect(() => {
    if (splitStatus=== "completed") {
      setCompleted("#E1EEBC");
      setCText("#328E6E");
    }}, [splitStatus]);
    
  return (
    <Timeline position='right'  sx={{
    [`& .MuiTimelineItem-root:before`]: {
      flex: 0, 
      padding: 0,
    },
  }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: "3rem", width: "4px", bgcolor: "#8DD8FF", borderRadius: "8px" }} />
          <TimelineDot sx={{ bgcolor: "#8DD8FF", border: "3px solid #5409DA", boxShadow: 3 }}>
            <IoCreateSharp size="1.5rem" color="#5409DA" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ display: "flex", alignItems: "end", px: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{
              px: 2,
              mb: 1.5,
              bgcolor: "#8DD8FF",
              color: "#5409DA",
              borderRadius: "2rem",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Created
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: "3rem", width: "4px", bgcolor: "#FFF287", borderRadius: "8px" }} />
          <TimelineDot sx={{ bgcolor: "#FFF287", border: "3px solid #C83F12", boxShadow: 3 }}>
            <FaRegClock size="1.5rem" color="#C83F12" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ display: "flex", alignItems: "end", px: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{
              px: 2,
              mb: 1.5,
              bgcolor: "#FFF287",
              color: "#C83F12",
              borderRadius: "2rem",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Pending
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: "3rem", width: "4px", bgcolor: completed, borderRadius: "8px" }} />
          <TimelineDot sx={{ bgcolor: completed, border: `3px solid ${cText}`, boxShadow: 3 }}>
            <FaCheck size="1.5rem" color={cText} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ display: "flex", alignItems: "end", px: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{
              px: 2,
              mb: 1.5,
              bgcolor: completed,
              color: cText,
              borderRadius: "2rem",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Completed
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default SplitTimeline;