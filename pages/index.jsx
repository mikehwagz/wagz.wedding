import { h } from 'hyposcript'
import { Layout } from '../components/layout'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}
