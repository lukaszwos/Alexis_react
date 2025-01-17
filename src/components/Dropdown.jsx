function Dropdown() {
  return (
    <li class="nav-item dropdown" style={{ listStyleType: "none" }}>
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
}

export default Dropdown;
