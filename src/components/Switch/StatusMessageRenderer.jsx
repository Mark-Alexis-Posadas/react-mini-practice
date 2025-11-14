export const StatusMessageRenderer = ({ status }) => {
  switch (status) {
    case "loading":
      return <div>Loading...</div>;
    case "success":
      return <div>Data loaded successfully!</div>;
    case "error":
      return <div>There was an error.</div>;
    default:
      return null;
  }
};
