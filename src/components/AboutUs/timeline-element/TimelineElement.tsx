import {
  VerticalTimelineElement,
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';

function TimelineElement(props: VerticalTimelineElementProps) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref}>
      <VerticalTimelineElement {...props} visible={inView} />
    </div>
  );
}

export default TimelineElement;
