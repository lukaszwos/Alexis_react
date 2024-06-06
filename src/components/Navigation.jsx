import NavItem from "./NavItems";
function Navigation({ positions, setPositions }) {
  function handleAdd() {
    setPositions([...positions, "new item"]);
  }
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {positions.map((element) => {
        return <NavItem item={element} />;
      })}
      <button onClick={handleAdd}>Add</button>
    </ul>
  );
}

export default Navigation;
