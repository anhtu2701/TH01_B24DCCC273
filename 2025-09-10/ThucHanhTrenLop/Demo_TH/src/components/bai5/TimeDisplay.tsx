interface TimeDisplayProps {
  time: string;
}

const TimeDisplay = ({ time}  : TimeDisplayProps) => {
    return <div style={{fontSize: '5rem'}}>{time}</div>;
};

export default TimeDisplay;
