import { Fragment } from "react";
import Header from "./component/header";
import Entry from "./component/Entry";
import data from "./data";
export default function App() {
  const entries = data.map((entry)=>{
    return(
      <Entry
      key={entry.id}
      {...entry}
      />
    )
  })
  return (
  <>
    <Header />
   {    entries}
  
  </>

  );
}