
// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import NavSearch from '@components/layout/shared/search'
import ModeDropdown from '@components/layout/shared/ModeDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import { UserButton } from '@clerk/nextjs'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-2 sm:gap-4'>
        <NavToggle />
        <NavSearch />
      </div>
      <div className='flex items-center'>

        <ModeDropdown />
        {/* <IconButton className='text-textPrimary'>
          <i className='ri-notification-2-line' />
        </IconButton>
        <UserDropdown /> */}
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default NavbarContent
