import { h } from 'hyposcript'
import { Layout } from '../components/layout'

export function getStaticPaths() {
  return ['/404.html']
}

export async function handler() {
  return (
    <Layout>
      <h1>404</h1>
    </Layout>
  )
}
