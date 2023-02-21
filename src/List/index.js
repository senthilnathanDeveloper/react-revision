import React, { useEffect, useState } from 'react'
import './style.css'
import dummyData from './dummyData'

const List = () => {
    const [data, setData] = useState(dummyData)


   const handleEdit = (id) => {
    console.log("id",id)
   }

//    const handleDelete = (id) => {
//     console.log("id",id)
//     // const deletedItem = data?.filter(item => item?.id !== id)
//     // setData([...deletedItem])
//     const newList = data.filter((item,index) => {
//         return index !== id
//     });
//     setData(newList);
//     console.log("newList",newList)
//    }
const handleDelete = (id) => {
    var index = data?.batters?.batter?.map((e) => {
        return e.id
    }).indexOf(id)
    data?.splice(index,1)
   };

   console.log("data",data)
    return (
        <>
         <div className='parent'>
            {data?.map((item) => {
                // console.log("item",item)
                return(
                    <div key={item?.id}>
                        <div className='header-parent'>
                        <h3>{item?.id}</h3>
                        <h3>{item?.type}</h3>
                        </div>
                        <hr/>
                        <table style={{width:"100%"}}>
                        {item?.batters && item?.batters?.batter?.map((batValue,indx) => {
                            // console.log("batValue",batValue)
                            return (
                                <>
                                {/* <div className='tabValue'>
                                    <h3>Batter</h3>
                                    <div>{batValue?.id}</div>
                                    <div>{batValue?.type} </div>
                                </div> */}
                                <tr>
                                    <th>Batter</th>
                                    <td>{batValue?.id}</td>
                                    <td>{batValue?.type}</td>
                                    <button onClick={() => handleEdit(batValue?.id)}>Edit</button>
                                    <button onClick={() => handleDelete(batValue?.id,indx)}>Delete</button>
                                </tr>
                                </>
                            )
                        })}
                       
                        {item?.topping && item?.topping?.map(topValue => {
                            // console.log("topValue",topValue)
                            return(
                                <>
                                    {/* <div className='tabValue'>
                                        <h3>Toppings</h3>
                                        <span>{topValue?.id}</span>
                                        <span>{topValue?.type}</span>
                                    </div> */}
                                     <tr>
                                    <th>Toppings</th>
                                    <td>{topValue?.id}</td>
                                    <td>{topValue?.type}</td>
                                    <button onClick={() => handleEdit(topValue?.id)}>Edit</button>
                                    <button>Delete</button>
                                </tr>
                                </>
                            )
                        })}
                         </table>
                        <hr/>
                    </div>
                )
            })}
         </div>
        </>
    )
}

export default List