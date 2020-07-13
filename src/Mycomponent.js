import React from 'react'
import {Spinner } from 'react-bootstrap';
function Mycomponent({isLoading , items}) {
    
    return isLoading ? <tbody className='spineer'>
                        <td><Spinner  animation="border" variant="primary" /></td>
                        <td><Spinner  animation="border" variant="primary" /></td>
                        <td><Spinner  animation="border" variant="primary" /></td>
                        <td><Spinner  animation="border" variant="primary" /></td>
                        <td><Spinner  animation="border" variant="primary" /></td>
                        <td><Spinner  animation="border" variant="primary" /></td>
                    </tbody> : <React.Fragment>
            {items.map((item, i) => 
                <tbody key={i}>
                    {item.status === "active" ?<tr>
                       <td>{item.name}</td>
                       <td>{item.age}</td>
                       <td>{item.gender}</td>
                       <td><img className="profile" src={item.img} alt="profile" /></td>
                       <td>{item.date}</td>
                       <td>{item.status}</td>    
                   </tr> : null}
                   
                </tbody>
            )}
            {items.map((item, i) => 
                <tbody key={i}>
                    {item.status === "left" ?<tr>
                       <td>{item.name}</td>
                       <td>{item.age}</td>
                       <td>{item.gender}</td>
                       <td><img className="profile" src={item.img} alt="profile" /></td>
                       <td>{item.date}</td>
                       <td>{item.status}</td>    
                   </tr> : null}
                   
                </tbody>
            )}
            {items.map((item, i) => 
                <tbody key={i}>
                    {item.status === "onboarded" ?<tr>
                       <td>{item.name}</td>
                       <td>{item.age}</td>
                       <td>{item.gender}</td>
                       <td><img className="profile" src={item.img} alt="profile" /></td>
                       <td>{item.date}</td>
                       <td>{item.status}</td>    
                   </tr> : null}
                   
                </tbody>
            )}
            </React.Fragment>
}

export default Mycomponent
