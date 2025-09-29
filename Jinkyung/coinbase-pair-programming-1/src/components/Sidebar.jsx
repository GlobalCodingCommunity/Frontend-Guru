import React from "react";

// TODO Q5
const Sidebar = () => {
    const [items, setItems] = React.useState([]);

  React.useEffect(()=>{
    const fetchSidebar = async ()=>{
      try{
        const response = await fetch('/sidebar');

        const data = await response.json()

        const count = data.count || 0
        const sidebarItem = [];
        
        for(let i=1;i<=count;i++){
          const key = `line_${i}`
          if(data[key]){
            sidebarItem.push(data[key])
          }
        }
        setItems(sidebarItem)
      }catch(error){
        console.error(error)
      }
    };
    fetchSidebar()
  },[])
  return (
    <div className="sidebar" data-testid="sidebar">
      {items.map((item,i)=>(
      <div key = {i} className="sidebar-item">{item}</div>
      ))}
    </div>
  );
};

export default Sidebar;
