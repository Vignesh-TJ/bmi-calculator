
import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight]=useState()
  const [height,setHeight]=useState()
  const [bmi,setBmi]=useState('')
  const [message,setMessage]=useState('')
  let imgSrc=''
  const calcbmi=(event)=>{
    event.preventDefault()
    if(weight==0 ||height==0){
      alert('please enter a valid weight or height')
    }
    else{
     let bmi=(weight /(height*height))
     console.log(bmi)
      setBmi(bmi.toFixed(2))
      if(bmi<18.5){
        setMessage('you are underweight')  
        colo.style.color='orange'
     im.src="https://th.bing.com/th/id/R.d67837912c8e2c20255438271ef4e9ab?rik=4L%2fBODZRO51HSQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f--7ASvLqjZ_c%2fViUQstSAGmI%2fAAAAAAAACQc%2fNFhLVp-iEv8%2fs1600%2fUnderweight-person.jpg&ehk=0Y14KGWVEAcFanJP5GZ2ZAnINrH9lfzfaVLAODtQBNQ%3d&risl=&pid=ImgRaw&r=0"

      }
      else if(bmi>=18.5 && bmi<25){
        setMessage('you are a healthy weight')
        colo.style.color='green'
        im.src="https://thumbs.dreamstime.com/b/man-salad-eating-healthy-portrait-studio-wellness-food-motivation-vegetables-asian-male-smile-vegetable-nutrition-272848665.jpg"

      }
      else{
        setMessage('you are over Weight')
        colo.style.color='red'
        im.src="https://c8.alamy.com/comp/2BF5W4W/overweight-boy-standing-on-scales-against-white-background-2BF5W4W.jpg"

      }
    }
  }
  const clear=()=>{
    setHeight('')
    setWeight('')
  }

  return (
    <>
    <div className='app'>
      <div className='container'>
        <h1 style={{color:'green',textAlign:'center',marginBlockEnd:'15px'}}>BMI Calculator</h1>
        <form action="">
          <div className='main'>
            <label htmlFor="">Weight(Kg)</label>
            <input type="text" value={weight} onChange={(event)=>{setWeight(event.target.value)}} name="" placeholder='weight' id="" />
          </div>
          <div>
            <label htmlFor="">height(Meters)</label>
            <input type="text" value={height} onChange={(event)=>{setHeight(event.target.value)}} placeholder='height' />
          </div>
          <div>
            <button className='btn btn-primary' type='submit' onClick={calcbmi}>submit</button>
            <button className='btn1' type='submit' onClick={clear}>Reset</button>

          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p style={{fontSize:"25px"}} id='colo'>{message}</p>

        </div>
        <div className='img-container'>
          <img src={imgSrc} id='im' alt="" />
        </div>
      </div>
    </div>

    </>
  )
}

export default App
