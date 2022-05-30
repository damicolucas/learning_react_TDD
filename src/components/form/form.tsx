import React, { useRef, useState } from "react";

import { useAddPlayer } from "../../state/hook/useAddPlayer";
import { useErrorMessage } from "../../state/hook/useErrorMessage";

export default function Form() {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const add = useAddPlayer();

  const errorMessage = useErrorMessage();

  const addPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addPlayer}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter players names"
        value={name}
        onChange={(v) => setName(v.target.value)}
      />
      <button disabled={!name}>Submit</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}
