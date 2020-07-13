import React, {useState, useEffect} from 'react';
import Mycomponent from "./Mycomponent"
import axios from 'axios';
import {Table} from "react-bootstrap"
const Header = () =>{
  return(
    
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grender</th>
                    <th>Profile Pic</th>
                    <th>Date </th>
                    <th>Status</th>
                </tr>
            </thead>
           
  )
}
function App() {
  const [items, setItems] = useState([]);
  const [isLoading , setIsloading] = useState(true);
  useEffect(()=>{
    const fetchItem   = async ()  =>{
      const result = await axios(`https://5w05g4ddb1.execute-api.ap-south-1.amazonaws.com/dev/profile/listAll`);
      function custom_sort(a, b) {
        var dateStringA = a.date; // Oct 23
        var dateStringB = b.date; // Oct 23
    
        var datePartsA = dateStringA.split("/");
        var datePartsB = dateStringB.split("/");
        // month is 0-based, that's why we need dataParts[1] - 1
        var dateObjectA = new Date(+datePartsA[2], datePartsA[1] - 1, +datePartsA[0]); 
        var dateObjectB = new Date(+datePartsB[2], datePartsB[1] - 1, +datePartsB[0]); 
        
        return new Date(dateObjectA).getTime() - new Date(dateObjectB).getTime();
      }
      const sorted_By_date = result.data.list.sort(custom_sort);
     // console.log(sorted_By_date) 
      setItems(sorted_By_date);
      setIsloading(false);
    }
    fetchItem();
  },[]); 
  
  return (
    <div className='container'>
      <Table  striped bordered hover>
        <Header />
        <Mycomponent isLoading={isLoading} items ={items} />
      </Table>
    </div>
  );
}

export default App;