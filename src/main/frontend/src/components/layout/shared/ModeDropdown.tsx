'use client'
// React Imports
import { useRef, useState } from 'react'
// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
// React Icons Imports
import { RiMoonClearLine, RiSunLine } from "react-icons/ri"
// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const ModeDropdown = () => {
  // States
  const [tooltipOpen, setTooltipOpen] = useState(false)
  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)
  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleToggle = () => {
    if (settings.mode === 'dark') {
      updateSettings({ mode: 'light' })
    } else {
      updateSettings({ mode: 'dark' })
    }
  }

  const getModeIcon = () => {
    return settings.mode === 'dark' ? <RiMoonClearLine /> : <RiSunLine />
  }

  return (
    <>
      <Tooltip
        title={settings.mode + ' Mode'}
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={tooltipOpen}
        PopperProps={{ className: 'capitalize' }}
      >
        <IconButton ref={anchorRef} onClick={handleToggle} className='text-textPrimary'>
          {getModeIcon()}
        </IconButton>
      </Tooltip>
    </>
  )
}

export default ModeDropdown
