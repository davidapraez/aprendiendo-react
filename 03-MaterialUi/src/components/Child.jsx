import React from "react";

const Child = ({ nombre, addmensaje }) => {
  return (
    <div>
      {nombre}
      <button onClick={() => addmensaje("child mensajessss")}>Evnssda</button>
    </div>
  );
};

export default Child;
