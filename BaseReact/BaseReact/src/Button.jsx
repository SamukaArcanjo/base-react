function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

Button.defaultProps = {
  text: "Click me",
  color: "red",
  fontSize: 35,
};

export default Button;
