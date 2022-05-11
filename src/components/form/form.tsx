import React from "react";

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Enter players names" />
      <button disabled={true}>Submit</button>
    </form>
  );
}
