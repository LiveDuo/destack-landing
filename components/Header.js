import Link from 'next/link'

const Head = () => {
	return (
        <header className="bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                <a className="block text-blue-600 cursor-pointer" href="/">
                    <span className="sr-only">Home</span>
                    <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67505 19.3393L6.67505 17.1965C5.8539 16.6099 5.44333 16.3167 5.22166 15.8859C5 15.4552 5 14.9507 5 13.9415V10.0585C5 9.73714 5 9.46696 5.00716 9.23403L11 13.5146V20.2313C10.6433 20.0309 10.227 19.7336 9.67505 19.3393ZM13 20.2313C13.3567 20.0309 13.773 19.7336 14.325 19.3393L17.325 17.1965C18.1461 16.6099 18.5567 16.3167 18.7783 15.8859C19 15.4552 19 14.9507 19 13.9415V10.0585C19 9.73714 19 9.46696 18.9928 9.23403L13 13.5146V20.2313ZM18.1276 7.39429L12 11.7711L5.87244 7.39429C6.08372 7.22593 6.34653 7.03821 6.67505 6.80356L9.67505 4.6607C10.7977 3.85878 11.3591 3.45782 12 3.45782C12.6409 3.45782 13.2023 3.85878 14.325 4.6607L17.325 6.80356C17.6535 7.03821 17.9163 7.22593 18.1276 7.39429Z" fill="currentColor"></path>
                    </svg>
                </a>
                </div>

                <div className="hidden md:block">
                <nav aria-labelledby="header-navigation">
                    <h2 className="sr-only" id="header-navigation">Header navigation</h2>

                    <ul className="flex items-center gap-6 text-sm">
                    <li><Link className="transition text-white hover:text-white/75 cursor-pointer" href="/blog" target="_self">Blog</Link></li>
                    <li><Link className="transition text-white hover:text-white/75 cursor-pointer" href="/#features" target="_self">Features</Link></li>
                    <li><Link className="transition text-white hover:text-white/75 cursor-pointer" href="/#reviews" target="_self">Reviews</Link></li>
                    <li><Link className="transition text-white hover:text-white/75 cursor-pointer" href="/#about" target="_self">About</Link></li>
                    </ul>
                </nav>
                </div>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500 cursor-pointer" href="https://github.com/LiveDuo/destack" target="_blank">Github</a>
                    <div className="hidden sm:flex">
                    <a className="block rounded-md px-5 py-2.5 text-sm font-medium bg-gray-800 text-white hover:text-white/75 cursor-pointer" href="https://www.npmjs.com/package/destack" target="_blank">NPM</a>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button className="rounded p-2 transition bg-gray-800 text-white hover:text-white/75 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </header>
)}
export default Head
