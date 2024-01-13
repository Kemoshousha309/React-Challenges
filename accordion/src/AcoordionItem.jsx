export function AccordionItem({ data, clickHandler }) {
  const { title, desc, active, id } = data;
  let accState = "acc-hide";
  if (active) accState = "acc-show";
  return (
    <div className="acc-item-container">
      <dt onClick={(e) => clickHandler(e, id)}>{title}</dt>
      <dd className={accState}>{desc}</dd>
    </div>
  );
}
