import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../counterSlice';

function Counter() {
    const dispatch = useDispatch()
    const[amount,setAmount] = useState(0)
  const count = useSelector(state=>state.counterReducer.count)
const handleIncrementByAmount = ()=>{
    if(amount){
        dispatch(incrementByAmount(amount))
    }else{
        alert("Enter a valid amount")
    }
}
    return (
        <>

            <div style={{ width: '100%', height: '100vh' }} className='d-flex flex-column align-items-center justify-content-center'>

                <h3 className='text-center mt-3'>COUNTER APP</h3>
                <div style={{ width: '600px', height: '450px', border: '1px solid white' }} className='border rounded'>

                    <div className='mt-5 d-flex align-items-center justify-content-center'>
                        <h1 style={{ fontSize: '50px' }}>{count}</h1>
                    </div>
                    <div className='d-flex align-items-center justify-content-around mt-5'>
                        <Button onClick={()=>dispatch(decrement())}  size='lg' variant="warning">DECREMENT</Button>{' '}
                        <Button onClick={()=>dispatch(reset())} variant='danger' as="input" type="submit" value="RESET" />{' '}
                        <Button onClick={()=>dispatch(increment())} size='lg' variant="success">INCREMENT</Button>{' '}
                    </div>
                    <div className='d-flex align-items-center justify-content-around mt-5'>
                        <FloatingLabel style={{ width: '330px' }} controlId="floatingPassword" label="Enter the amount to be incremented">
                            <Form.Control onChange={e=>setAmount(e.target.value)} type="text" placeholder="Enter the amount to be incremented" />
                        </FloatingLabel>
                        <Button onClick={handleIncrementByAmount} size='lg' variant="primary">INCREMENT BY AMOUNT</Button>{' '}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter