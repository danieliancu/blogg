import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from 'import/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
        <p>hello</p>
    </main>
    </Layout>
  )
}
