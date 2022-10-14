import NextHead from 'next/head'

export default function Head({ title, favicon = '/favicon.ico' }) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href={favicon} />
    </NextHead>
  )
}
