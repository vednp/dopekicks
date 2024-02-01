import { orbitron } from "@/app/fonts";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="p-4 bg-black dark sm:p-6 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://dopekicks-ochre.vercel.app" className="flex items-center">
                    <span className={cn("self-center text-2xl font-semibold whitespace-nowrap dark:text-white", orbitron.className)}>Dope Kicks</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://vedpahune.vercel.app" target="_blank" className="hover:underline">About Me</a>
                        </li>
                        <li>
                            <a href="https://dopekicks-ochre.vercel.app" className="hover:underline">Website</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://github.com/vednp" target="_blank" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/vedpahune" target="_blank" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} DopeKicks™.  All Rights Reserved.
            </span>
        </div>
    </div>
</footer>
  )
}