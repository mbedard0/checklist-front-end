import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem.jsx'


const Lists = (props) => {
  return (
    <>
      <div className='flex flex-col'>
        {props.lists.map(list => <ListItem list={list} handleDelete={props.handleDelete} />)}
      </div>
    </>
  );
}

export default Lists;