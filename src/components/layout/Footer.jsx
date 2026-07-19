import { footerSections } from "../../config/footerSections";
import Container from "../ui/Container";
import Typography from "../ui/Typography";

export default function Footer() {
  return (
    <footer className="border-border bg-surface mt-16 border-t">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <Typography variant="h3">{section.title}</Typography>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Typography variant="caption">{link}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border border-t py-6">
          <Typography variant="caption">
            © {new Date().getFullYear()} SkyMart. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
