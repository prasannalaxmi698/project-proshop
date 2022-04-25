import '../index.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          style={{ padding: '0.5rem' }}
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products....."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>

        <Button
          className="btn btn-dark"
          style={{
            color: '#268763',
            backgroundColor: '#404040',
            border: '2px solid #268763',
            padding: '0.5rem',
          }}
        >
          <strong>SEARCH</strong>
        </Button>
      </InputGroup>
    </Form>
  );
}
