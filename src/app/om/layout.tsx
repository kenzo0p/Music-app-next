
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>innner layout item</h2>
        {children}
    </>
  )
}
