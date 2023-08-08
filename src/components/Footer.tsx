import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-row md:flex-row sm:flex-col items-center justify-between border-t mt-4 md:mt-32 px-4 md:px-16 '>
        <div className='mt-9 sm:mb-3'>
            <small className="text-sm font-normal leading-none">&copy; 2023 Kudika Digital - <Link href="https://github.com/euotiniel/kudika-dash-blog" className='border-b transition-all duration-500 hover:border-gray-400'>MIT <br className='sm:hidden' /> License</Link></small>
        </div>
        <div>
            <small className="text-sm font-normal leading-none">Made with ❤️ and coffee</small>
        </div>
    </footer>
  )
}
