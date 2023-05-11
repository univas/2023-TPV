function Input({ type, placeholder, required, onChange }) {
    return (
      <input 
        className="form-control" 
        required={required}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    )
  }
  
  export default Input
  