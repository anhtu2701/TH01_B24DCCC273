interface WrappedProps {
  children: React.ReactNode;
}

const BaseWrapped = ({ children }: WrappedProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </div>
    )
}

export default BaseWrapped;