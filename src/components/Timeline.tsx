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
        <TimelineItem key={index}>
          {/* Opposite Content */}
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align={index % 2 === 0 ? 'right' : 'left'}
            variant="body2"
            color={Colors.textPrimary}
            className="timeline-year" // Add CSS class
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
                  width: '50px',
                  height: '50px',
                  borderRadius: '100%',
                  border: '2px solid black',
                  objectFit: 'scale-down',
                  backgroundColor: 'white',
                }}
                className="timeline-icon" // Add CSS class
              />
            </Typography>
            <TimelineConnector sx={{ height: '10px', width: '4px' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '5%', px: 2 }} className="timeline-content">
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
