import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
    // ...add more providers here
  ],
  secret: '59cdafdca7d4391d1857b03999ffbb2c'
}
export default NextAuth(authOptions)
