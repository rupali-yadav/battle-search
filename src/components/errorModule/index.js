const Error = ({visible, error}) => (
    visible && <div className="errCon">{error}</div>
)

export default Error;