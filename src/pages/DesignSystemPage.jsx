import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import Typography from "../components/ui/Typography";

export default function DesignSystemPage() {
  return (
    <Container>
      <div className="space-y-16 py-12">
        {/* Page Header */}
        <section className="space-y-2">
          <Typography variant="h1">SkyMart Design System</Typography>

          <Typography>
            Foundation components used throughout the application.
          </Typography>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <Typography variant="h2">Typography</Typography>

          <div className="space-y-3">
            <Typography variant="h1">Heading 1</Typography>

            <Typography variant="h2">Heading 2</Typography>

            <Typography variant="h3">Heading 3</Typography>

            <Typography>
              This is the default body text used across the application.
            </Typography>

            <Typography variant="caption">Caption / Supporting text</Typography>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <Typography variant="h2">Buttons</Typography>

          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>

            <Button variant="secondary">Secondary Button</Button>

            <Button disabled>Disabled Button</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6">
          <Typography variant="h2">Inputs</Typography>

          <div className="max-w-md space-y-4">
            <Input placeholder="Email Address" />

            <Input type="password" placeholder="Password" />

            <Input disabled placeholder="Disabled Input" />
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <Typography variant="h2">Cards</Typography>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="space-y-4">
                <Typography variant="h3">Product Card</Typography>

                <Typography>₹89,999</Typography>

                <Button>Add to Cart</Button>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <Typography variant="h3">Account Card</Typography>

                <Typography>Welcome back to SkyMart.</Typography>

                <Button variant="secondary">View Profile</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Container>
  );
}
