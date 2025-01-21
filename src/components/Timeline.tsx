import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import Colors from '../constants/colors';

interface TimelineEvent {
  title: string;
  year: string;
  description: string;
  icon: string; // Expecting a string path to the icon (e.g., an SVG)
}

interface CustomizedTimelineProps {
  timelineData: TimelineEvent[]; // Accepts timeline data as input
}

export default function CustomizedTimeline({ timelineData }: CustomizedTimelineProps) {
  return (
    <Timeline position="alternate">
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>{/* Opposite Content */}
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align={index % 2 === 0 ? 'right' : 'left'}
          variant="body2"
          color={Colors.textPrimary}
        >
          {item.year}
        </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '10px', width: '4px' }} />
            <Typography width={'50px'} component="span">
            <img
                src={item.icon}
                alt={item.title}
                style={{
                    width: '50px', // Set the width of the image
                    height: '50px', // Set the height of the image
                    borderRadius: '100%', // Makes the image circular
                    border: '2px solid black', // Optional: Adds a border around the image
                    objectFit: 'scale-down', // Ensures the image fits well within the circular shape
                    backgroundColor: 'white',
                }}
            />
            </Typography>
            <TimelineConnector sx={{ height: '10px', width: '4px' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '5%', px: 2 }}>
            <Typography variant="h6" component="span" color={Colors.border}>
              {item.title}
            </Typography>
            <Typography color={Colors.textPrimary}>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
