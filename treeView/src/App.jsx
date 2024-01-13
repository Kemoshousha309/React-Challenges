import { useRef } from "react"
const tree =  [
  {name: "setting",
  children: [
    {
      name: "screen",
      children: [
        {name: "display"},
        {name: "colors"},
        {name: "size"},
      ]
    },
    {
      name: "user",
      children: [
        {name: "password"},
        {
          name: "privacy",
          children: [
            {
              name: "conditions",
              children: [
                {name: "learn more"}
              ]
            }
          ]
        }
      ]
    }
  ]}
]


function Node({name, children}) {
  const childrenRef = useRef(null);
  const handleNodeClick = e => {
    e.stopPropagation()
    const children = childrenRef.current;
    if(!children) return;
    let currentDisplay = children.style.display;
    if(currentDisplay === "block") {
      children.style.display = "none"
    }else {
      children.style.display = "block"
    }
  }
  return (
    <li onClick={handleNodeClick} style={{cursor: "pointer"}}>
      {name}
      {children ? (
        <ul ref={childrenRef} style={{display: "none"}} >
          {children.map(n => <Node key={n.name} name={n.name} children={n.children} />)}
        </ul>
      ) : null}
    </li>
  )
}


function App() {
  return (
    <>
      {tree.map(n => <Node key={n.name} name={n.name} children={n.children} />)}
    </>
  )
}

export default App
