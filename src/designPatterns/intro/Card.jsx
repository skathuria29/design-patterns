export const Header = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
export const Body = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
export const Actions = ({ actions, onAction }) => {
  return (
    <div>
      {actions.map(({ label, id }) => (
        <input type="button" key={id} onClick={onAction} value={label} />
      ))}
    </div>
  );
};

export const Dialog = ({ header, body, actions }) => {
  const onAction = () => {};
  return (
    <div className="h-200 border-1 flex flex-direction-column">
      <Header className="h-50 border-bottom-1">{header}</Header>
      <Body className="flex-grow-1">{body}</Body>
      <Actions actions={actions} onAction={onAction} />
    </div>
  );
};

export const Dialog1 = ({ header, body, actions }) => {
  const onAction = () => {};
  return (
    <div className="h-200 border-1 flex flex-direction-column">
      <div className="h-50 border-bottom-1">{header}</div>
      <div className="flex-grow-1">{body}</div>
      <div>
        {actions.map(({ label, id }) => (
          <input type="button" key={id} onClick={onAction} value={label} />
        ))}
      </div>
    </div>
  );
};
