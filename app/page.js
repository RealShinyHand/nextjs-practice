import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default async function Home() {
  return (
   <div>
      HI
      <Link href={"/list"}>List</Link>
   </div>
  )
}
