const Error = ({ visible, error }) =>
  visible && (
    <div className="error-wrapper">
      <div className="error-container">
        <p className="title">Error</p>
        {error}
      </div>
    </div>
  );

export default Error;
