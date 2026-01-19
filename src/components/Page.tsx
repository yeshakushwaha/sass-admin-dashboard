import type React from 'react'
import  ThemeToggle  from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { SearchIcon, Settings2Icon, DownloadIcon } from 'lucide-react'


export const Page = ({children}: React.PropsWithChildren) => {
  return (
    <div className='px-4 py-8 md:p-8'>
      {children}
    </div>
  )
};

export const PageHeader = () => {
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
      <h1 className='text-xl font-semibold lg:text-2xl'>Welcome back, Sadee</h1>
      <div className='flex items-center gap-3'>
        <div className='flex max-lg:hidden items-center'>
          <ThemeToggle />

          <Button variant='ghost' size='icon' aria-label='Search'>
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant='outline'>
            <Settings2Icon className="mr-2 h-4 w-4" />
            <span>Customize</span>
          </Button>
          <Button variant='outline'>
            <DownloadIcon className="mr-2 h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
