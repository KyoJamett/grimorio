// ShortcutComponent.jsx
import React from "react";

const ShortcutComponent = () => {
  return (
    <div className="container my-4">
      <div className="shortcut-info">
        <h5>Agrega la página a tu teléfono</h5>
        <ol>
          <li>
            Abre el enlace en una nueva pestaña (es importante que sea una nueva
            pestaña, no una pestaña donde ya tengas otra página abierta para
            evitar errores).
          </li>
          <li>
            En las opciones del navegador, selecciona la opción "Agregar a la
            pantalla principal".
          </li>
          <li>¡Listo!</li>
        </ol>
      </div>
    </div>
    
  );
};

export default ShortcutComponent;
