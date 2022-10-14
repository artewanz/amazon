import Head from '@src/components/Head/Head'
import Header from '@src/components/Header'

export default function DefaultLayout({ title, children }) {
  return (
    <div>
      <Head title={title} />
      <Header />

      <main className="max-w-screen-2xl mx-auto">{children}</main>
    </div>
  )
}
