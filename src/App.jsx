import { useState } from "react";
import DropDown from "./components/Dropdown"
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "../src/components/Accordion";
import Route from './components/Route';
import Header from './components/Header'

const items =[
    {
       title:"what is React",
       content:"React is a front-end javascript library"
   },
    {
        title:"Why use React?",
       content:"It is easy to learn"
    },
    {
         title:"How do ypu use React?",
         content:"We use React by creating the components"
    }
 ]
const options=[
    {
        label:"The Color Red",
        value:"red"
    },
    {
        label:"The Color Greeen",
        value:"green"
    },
    {
        label:"The Color Blue",
        value:"blue"
    }
];



const App =() =>{
    const[selected,setSelected]=useState(options[0])
    return(
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <DropDown
                label='Select a color'
                options={options}
                selected = {selected}
                onSelectedChange={setSelected}/>
            </Route>
            <Route path = '/translate'>
                <Translate/>
            </Route>
            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
          <Translate/> */}
        </div>
    )
}


export default App;