export default function Input({ label, id, name = id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} {...props} />
    </p>
  );
}
