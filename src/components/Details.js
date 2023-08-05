import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                  <img src={img} alt="Product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                  <h1>Model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by :<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>Rp.</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product :</p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer2 className="mr-2">Back to Product</ButtonContainer2>
                    </Link>
                    <ButtonContainer2
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'inCart' : 'Add To Cart'}
                    </ButtonContainer2>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;

const ButtonContainer2 = styled.button`
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
