export default function Offline() {
  const ContainerCSS = {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e40af',
    color: '#fff',
    textAlign: 'center',
  }

  const MainTextCSS = {
    fontSize: 24,
    fontWeight: 600,
  }

  const SubTextCSS = {
    fontSize: 16,
    opacity: 0.6,
  }

  const buttonCSS = {
    border: '1px solid #ffffff22',
    padding: '2px 4px',
    marginTop: 12,
  }

  return (
    <div style={ContainerCSS}>
      <div>
        <h2 style={MainTextCSS}>You're offline now</h2>
        <h6 style={SubTextCSS}>and we can't connect to your cache</h6>
        <button role='button' style={buttonCSS}>
          Refresh
        </button>
      </div>
    </div>
  )
}
