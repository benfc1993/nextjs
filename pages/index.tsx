import dynamic from 'next/dynamic'


const Test = dynamic(() => import('../components/Test').then((mod) => mod.Test),{ssr:false})

export default function Home() {
  return (
    <>
    <Test/>
    </>  
  )
}
