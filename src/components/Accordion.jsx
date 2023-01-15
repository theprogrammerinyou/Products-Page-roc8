import { useState } from 'react';
import 'styles/accordion.css';

export function Accordion(props) {
  const { title, content } = props;
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const onAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordion-container">
      <button className="accordion" type="button" onClick={onAccordionToggle}>
        {title}
      </button>
      {isAccordionOpen && <div className="panel">{content}</div>}
    </div>
  );
}
