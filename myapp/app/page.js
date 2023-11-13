import Community from '@/components/Community/Community'
import Featured from '@/components/Featured/Featured'
import GiftItem from '@/components/GiftItem/GiftItem'
import Hero from '@/components/Hero/Hero'
import ProductList from '@/components/ProductList/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Hero />
    <Featured />
    <ProductList />
    <GiftItem />
    <Community />
   </main>
  )
}
