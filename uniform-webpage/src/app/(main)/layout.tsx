import type { PropsWithChildren } from "react"

export default function MainLayout({
    children,
}:PropsWithChildren<unknown>) {
  return (
    <div>
        <h1>main</h1>
        {children}
    </div>
  )
}
