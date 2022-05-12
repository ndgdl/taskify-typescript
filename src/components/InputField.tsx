import React, { useRef } from 'react';
import './styles.css';

interface props {
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
      }}>
      <input
        type='input'
        ref={inputRef}
        value={todo}
        onChange={ (e) => setTodo(e.target.value) }
        placeholder='Enter a task'
        className='input__box'/>
      <button type='submit' className='input__submit'>Go</button>
    </form>
  )
}
