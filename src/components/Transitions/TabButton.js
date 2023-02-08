export default function TabButton({ children, isActive, onClick }) {
  return (
    <button
      className={isActive ? "active" : ""}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
