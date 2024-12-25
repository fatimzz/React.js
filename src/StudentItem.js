   /*function StudentItem(props){
         return <button style={{
          width: 200,
          marginBottom: 10,
         // background: props.index % 2? 'Green' :'Black',
         // color: 'red',
          borderRadius: 7,
          border: 0,
          padding: "10px",
          backgroundColor: props.index % 2 === 0 ? "#f0f0f0" : "#ffffff",
          borderBottom: "1px solid #ddd",
          fontSize: "16px",
}}>
{props.student.first_name}
{props.student.last_name}

               </button>
}*/

export default function StudentItem({student, style, customClass = ''}) {
    
	return (
        <li style={style} className={customClass}>
            {student.firstName} {student.lastName}
        </li>
    )
}