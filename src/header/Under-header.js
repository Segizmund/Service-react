import React from 'react';
import {
  Route,
  Routes,
  Link,
  NavLink
} from "react-router-dom"

function Under__header() {
  return (
    <div className="Under__header">
    <div className="Upper__line">
      <span className="Create__btn">Создать</span>
    </div>
    <div className="Under__line">
      <div className="Toggle__btn">
      <NavLink to="/description" className="Description"><span>Описание</span></NavLink>
      <NavLink to="/technology" className="Technology"><span>Технология</span></NavLink>
      </div>
    </div>
    </div>
  );
}

export default Under__header;