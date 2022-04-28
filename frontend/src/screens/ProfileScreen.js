import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, orders: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const { state } = useContext(Store);
// const { userInfo } = state;
// const navigate = useNavigate();

// const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
//   loading: true,
//   error: '',
// });
// useEffect(() => {
//   const fetchData = async () => {
//     dispatch({ type: 'FETCH_REQUEST' });
//     try {
//       const { data } = await axios.get(
//         `/api/orders/mine`,

//         { headers: { Authorization: `Bearer ${userInfo.token}` } }
//       );
//       dispatch({ type: 'FETCH_SUCCESS', payload: data });
//     } catch (error) {
//       dispatch({
//         type: 'FETCH_FAIL',
//         payload: getError(error),
//       });
//     }
//   };
//   fetchData();
// }, [userInfo]);

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate, loading, error, orders }, dispatch] = useReducer(
    reducer,
    {
      loadingUpdate: false,
      loading: true,
      error: '',
    }
  );
  // const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
  //     loading: true,
  //     error: '',
  //   });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(
          `/api/orders/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
  };

  return (
    <div className="container profile-container">
      <div style={{ display: 'inline-block' }}>
        <Helmet>
          <title>User Profile</title>
        </Helmet>
        <h2 className="my-3">USER PROFILE</h2>
        <form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ border: 'none', backgroundColor: '#EEF1F0' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              style={{ border: 'none', backgroundColor: '#EEF1F0' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ border: 'none', backgroundColor: '#EEF1F0' }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              style={{ border: 'none', backgroundColor: '#EEF1F0' }}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3">
            <Button className="btn btn-dark" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
      <div className="order" style={{ float: 'right' }}>
        <Helmet>
          <title>Order History</title>
        </Helmet>

        <h2>MY ORDERS</h2>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                  <td>
                    {order.isDelivered
                      ? order.deliveredAt.substring(0, 10)
                      : 'No'}
                  </td>
                  <td>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => {
                        navigate(`/order/${order._id}`);
                      }}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// <Card>
// <Link to={`/product/${product.slug}`}>
//   <img className="card-img-top" src={product.image} alt={product.name} />
// </Link>
// <Card.Body>
//   <Link className="product-a" to={`/product/${product.slug}`}>
//     <Card.Title className="product-name">{product.name}</Card.Title>
//   </Link>
//   <Card.Text>${product.price}</Card.Text>
//   <Rating rating={product.rating} numReviews={product.numReviews} />
//   {product.countInStock === 0 ? (
//     <Button variant="light" disabled>
//       Out of stock
//     </Button>
//   ) : (
//     <Button
//       className="btn btn-dark"
//       onClick={() => addToCartHandler(product)}
//     >
//       Add to cart
//     </Button>
//   )}
// </Card.Body>
// </Card>
