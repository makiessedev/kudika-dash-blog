import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-row items-center justify-between border-t mt-32'>
        <div className='mt-9'>
            <p>&copy; 2023 Kudika Digital - <Link href="https://github.com/euotiniel/kudika-dash-blog" className='border-b transition-all duration-500 hover:border-gray-400'>MIT <br /> License</Link></p>
        </div>
        <div>
            <p>Made with ❤️ and coffee</p>
        </div>
    </footer>
  )
}
