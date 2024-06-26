import { FC } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

import { ILogItem } from '../../../types';
import { author, date, logItemWrap, message } from './LogItem.css';

type TLogItemProps = {
  logItem: ILogItem;
};

const getTimeOffsetText = (minutes: number, seconds: number): string => {
  if (minutes === 0 && seconds === 0) {
    return 'just now';
  }

  const minutesText = minutes > 0 ? `${minutes}m ` : '';
  const secondsText = seconds > 0 ? `${seconds}s ` : '';
  return `${minutesText}${secondsText}ago`;
};

const LogItem: FC<TLogItemProps> = ({ logItem }) => {
  const timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));
  const timeOffsetText = getTimeOffsetText(
    timeOffset.getMinutes(),
    timeOffset.getSeconds(),
  );

  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>

      <div className={message}>{logItem.logMessage}</div>

      <div className={date}>{timeOffsetText}</div>
    </div>
  );
};

export default LogItem;
