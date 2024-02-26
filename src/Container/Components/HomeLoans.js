import React from 'react'
const container ={
  display : 'flex',
  flexDirection : 'row',
  

}
const card = {
  border : '1px solid brown',
  width:'200px',
  height:'200px',
  backgroundColor:'lightblue',
  margin:'100px',
  padding:'100px',
  alignItems:'center',
  alignContent:'center'
  
}
const HomeLoans = () => {
  const loans =  [ 'Refinance a home','Buy a new home','Use my equity']
  
  return (
    <div style={container}>
      {loans.map((item,index)=>(
        <div style={card}>{item}</div>
      ))}
    </div>
  )
}

export default HomeLoans