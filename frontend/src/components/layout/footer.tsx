export function Footer() {
  return (
    <footer className="glass-card mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Physical AI & Humanoid Robotics</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive textbook for students and professionals in AI and robotics.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Chapters</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/chapters/1" className="hover:text-primary">Introduction</a></li>
              <li><a href="/chapters/2" className="hover:text-primary">Fundamentals</a></li>
              <li><a href="/chapters/3" className="hover:text-primary">Control Systems</a></li>
              <li><a href="/chapters/4" className="hover:text-primary">ML for Robotics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/docs" className="hover:text-primary">Documentation</a></li>
              <li><a href="/api" className="hover:text-primary">API Reference</a></li>
              <li><a href="/examples" className="hover:text-primary">Examples</a></li>
              <li><a href="/community" className="hover:text-primary">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/github" className="hover:text-primary">GitHub</a></li>
              <li><a href="/discord" className="hover:text-primary">Discord</a></li>
              <li><a href="/twitter" className="hover:text-primary">Twitter</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}