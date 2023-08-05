import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto py-2 col-md-6 col-lg-4 text-center text-capitalize">
                      <h5>Item Added to Cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : Rp. {price}</h5>
                      <Link to="/" className="mr-2">
                        <ButtonContainer3 onClick={() => closeModal()}>Continue Shopping</ButtonContainer3>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer3 cart onClick={() => closeModal()}>
                          Go to Cart
                        </ButtonContainer3>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
const ButtonContainer3 = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  border-radius: 10px;
  background: transparent;
  color: var(--mainBlue);
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
