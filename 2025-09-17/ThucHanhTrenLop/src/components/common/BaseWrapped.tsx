interface WrappedProps {
  children: React.ReactNode;
}

const BaseWrapped = ({ children }: WrappedProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            padding: '20px',
            margin: '0 10px',
        }}>
            {children}
        </div>
    )
}

export default BaseWrapped;