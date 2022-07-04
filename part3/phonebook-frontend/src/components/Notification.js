export function Notification({ notification }) {
  const { type, message } = notification

  const notificationStyle = {
    marginBottom: '1em',
    padding: '0.5em 0.75em',
    fontSize: '1.25rem',
    borderRadius: 8,
    backgroundColor: '#eee',
    borderLeft: 'solid 6px #666'
  }

  switch (type) {
    case 'success':
      notificationStyle.backgroundColor = '#ebf5eb'
      notificationStyle.borderColor = 'green'
      break
    case 'error':
      notificationStyle.backgroundColor = '#fff2f2'
      notificationStyle.borderColor = 'red'
      break
    default:
      break
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}
