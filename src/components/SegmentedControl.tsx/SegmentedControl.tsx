import { SegmentedControl } from '@mantine/core';
import classes from './SegmentedControl.module.css';

export const SegmentedControlNavigation = () => {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['About', 'Articles', 'Projects', 'Uses']}
      classNames={classes}
      transitionDuration={0}
    />
  );
};
