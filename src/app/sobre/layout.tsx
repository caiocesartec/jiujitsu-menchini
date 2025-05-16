export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Sem Header, sem Footer */}
        {children}
      </body>
    </html>
  );
}
