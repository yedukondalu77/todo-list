// import { Button, Card,Checkbox,Text} from '@mantine/core';
// import React, { useRef } from 'react';
// import { TbTrash } from 'react-icons/tb';


// const Todo = ({ todolist, deletehandler }) => { 
//   const ele=useRef(null)
//   return (
//     <Card shadow="sm" padding="md" radius="md" withBorder mt='lg'  bg={'lavender'}>
//       {
//         todolist.map((todo, index) => (
//           <div className='div' key={index} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5px',marginBottom:'5px',gap:"2px"}}>
//             <Checkbox style={{marginTop:'2px'}} onClick={()=>{
//               ele.current.style.color='gray'
//               ele.current.style.textDecorationLine='line-through'
//             }
//             }/>
          
//             <Text style={{width:'70%',overflowX:'scroll', scrollbarWidth:'none',
//             overscrollBehaviorX:'contain'}}  ref={ele}>{todo}</Text>
//             <TbTrash onClick={() => deletehandler(index)}></TbTrash>
//           </div>
//         ))
//       }
//     </Card>
//   );
// };

// export default Todo;



import {Card, Checkbox, Text } from '@mantine/core';
import React, { useState } from 'react';
import { TbTrash } from 'react-icons/tb';

const Todo = ({ todolist, deletehandler }) => {
  
  const [checkedItems, setCheckedItems] = useState(todolist.map(() => false));

  const handleCheckboxChange = (index) => {

    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder mt="lg" bg="lavender">
      {todolist.map((todo, index) => (
        <div
          className="div"
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
            marginBottom: '5px',
            gap: '2px',
          }}
        >
          <Checkbox
            style={{ marginTop: '2px' }}
            checked={checkedItems[index]} 
            onChange={() => handleCheckboxChange(index)} 
          />
          <Text
            style={{
              width: '70%',
              overflowX: 'scroll',
              scrollbarWidth: 'none',
              overscrollBehaviorX: 'contain',
              textDecorationLine: checkedItems[index] ? 'line-through' : 'none', 
              color: checkedItems[index] ? 'gray' : 'black', 
            }}
          >
            {todo}
          </Text>
          <TbTrash onClick={() => deletehandler(index)} />
        </div>
      ))}
    </Card>
  );
};

export default Todo;
