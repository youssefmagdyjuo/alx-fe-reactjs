import { useUserStore } from '../store/usersStore';
export default function UserCard() {
  const { users } = useUserStore();
  return (
    <div style={{ display: "grid",gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
      {users.map((user) => (
        <section
          key={user.username}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            minHeight: "220px",
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.22)",
            backgroundColor: "#ffffffff",
            maxWidth: "300px",
          }}
        >
          {user.name && (
            <>
              <img
                src={user.img}
                alt={user.username}
                width="120"
                style={{
                  borderRadius: "50%",
                  border: "3px solid #2563eb"
                }}
              />
              <h2 style={{ margin: "10px 0 0", fontSize: "1.5rem", color: "#333" }}>
                {user.name}
              </h2>
              <p style={{ margin: "4px 0", color: "#555" }}>
                @{user.username}
              </p>
              <a
                href={user.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1e40af"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
              >
                View Profile
              </a>
            </>
          )}
        </section>
      ))}
    </div>
  )
}
