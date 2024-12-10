import React, { useState } from "react";
import { FaUser, FaBars, FaUsers, FaCog, FaChartBar, FaFileAlt } from "react-icons/fa";
import "./Slidebar.css";

function Slidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Botón de menú móvil */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isMobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">{!isCollapsed && "ERP System"}</h2>
          <FaBars className="collapse-icon" onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <FaChartBar />
            {!isCollapsed && <span>Dashboard</span>}
          </li>
          <li className="menu-item has-submenu">
            <FaUser />
            {!isCollapsed && <span>Usuarios</span>}
            <ul className="submenu">
              <li>Nuevo Usuario</li>
              <li>Todos los Usuarios</li>
              <li>Especificaciones de Usuarios</li>
            </ul>
          </li>
          <li className="menu-item">
            <FaFileAlt />
            {!isCollapsed && <span>Reportes</span>}
          </li>
          <li className="menu-item">
            <FaCog />
            {!isCollapsed && <span>Configuración</span>}
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Slidebar;
