function NavItem({ item }) {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        {item}
      </a>
    </li>
  );
}

export default NavItem;
