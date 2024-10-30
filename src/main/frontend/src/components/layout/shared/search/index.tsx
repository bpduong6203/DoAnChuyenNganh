'use client'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'


// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Icon
import { RiSearchLine } from "react-icons/ri";


const NavSearch = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return isBreakpointReached ? (
    <IconButton className='text-textPrimary'>
      <RiSearchLine />
    </IconButton>
  ) : (
    <div className='flex items-center cursor-pointer gap-2'>
      <IconButton className='text-textPrimary'>
        <RiSearchLine />
      </IconButton>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder='Search' inputProps={{ 'aria-label': 'description' }} />
      </Grid>
    </div>
  )
}

export default NavSearch
