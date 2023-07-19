import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { Cart } from './cart';
import './cart-modal.css'

export const CartModal = () => {

    const [modalIsOpen,setModalIsOpen] = useState(true);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal className='cart-modal-container' isOpen={modalIsOpen}>
                <Link to='/'> Back to home page </Link>
                <Cart/>
            </Modal>
        </>
    )
}