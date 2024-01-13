import { useState } from "react";
import { AccordionItem } from "./AcoordionItem";

const accordion = [
  {
    id: 1,
    title: "term1",
    active: false,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "term2",
    active: false,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "term3",
    active: false,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "term4",
    active: false,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "term5",
    active: false,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function Accordion({}) {
  const [accList, setAccList] = useState(accordion);
  const titleClickHandler = (e, id) => {
    const updateList = accList.map(i => {
        if(i.id == id) {
            return {
                ...i,
                active: !i.active
            }
        }
        return {...i, active: false}
    })
    setAccList(updateList);
  };
  return (
    <dl className="accordion-container">
      {accList.map((item) => {
        return (
          <AccordionItem
            key={item.key}
            data={item}
            clickHandler={titleClickHandler}
          />
        );
      })}
    </dl>
  );
}
