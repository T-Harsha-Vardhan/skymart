import Container from "../components/ui/Container";
import Typography from "../components/ui/Typography";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Card from "../components/ui/Card";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return null; // ProtectedRoute will handle redirect
  }

  return (
    <Container>
      <div className="py-12">
        <Typography variant="h2" className="mb-8">My Profile</Typography>

        <div className="max-w-xl">
          <Card>
            <div className="space-y-6">
              <div>
                <Typography variant="caption" className="block mb-2">Name</Typography>
                <Typography variant="h3">{user.name}</Typography>
              </div>

              <div>
                <Typography variant="caption" className="block mb-2">Email</Typography>
                <Typography variant="h3">{user.email}</Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
